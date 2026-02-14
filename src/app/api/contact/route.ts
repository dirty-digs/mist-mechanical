import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

interface ContactPayload {
  type: "service-request" | "quote" | "booking";
  services?: string[];
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  jobs?: string[];
  home_size?: string;
  tier?: string;
  estimate_low?: number;
  estimate_high?: number;
  booking_date?: string;
}

function buildEmailBody(data: ContactPayload): string {
  const lines: string[] = [];
  lines.push(`New ${data.type.replace("-", " ").toUpperCase()} submission`);
  lines.push("─".repeat(40));

  if (data.name) lines.push(`Name: ${data.name}`);
  if (data.phone) lines.push(`Phone: ${data.phone}`);
  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.services?.length) lines.push(`Services: ${data.services.join(", ")}`);
  if (data.jobs?.length) lines.push(`Jobs: ${data.jobs.join(", ")}`);
  if (data.home_size) lines.push(`Home Size: ${data.home_size}`);
  if (data.tier) lines.push(`Tier: ${data.tier}`);
  if (data.estimate_low && data.estimate_high)
    lines.push(`Estimate: $${data.estimate_low.toLocaleString()} – $${data.estimate_high.toLocaleString()}`);
  if (data.booking_date) lines.push(`Requested Date: ${data.booking_date}`);
  if (data.message) {
    lines.push("");
    lines.push("Message:");
    lines.push(data.message);
  }

  return lines.join("\n");
}

function subjectLine(data: ContactPayload): string {
  const name = data.name || "Unknown";
  switch (data.type) {
    case "quote":
      return `Quote Request from ${name}`;
    case "booking":
      return `Booking Request from ${name}`;
    default:
      return `Service Request from ${name}`;
  }
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    // Store in Supabase
    const { error: dbError } = await supabase
      .from("contact_requests")
      .insert(data);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json({ error: "Failed to save request" }, { status: 500 });
    }

    // Send email if SMTP is configured
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: "mail.privateemail.com",
          port: 465,
          secure: true,
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: `"Mist Mechanical Website" <${smtpUser}>`,
          to: "info@mistmechanical.ca",
          subject: subjectLine(data),
          text: buildEmailBody(data),
        });
      } catch (emailErr) {
        console.error("Email send error:", emailErr);
        // Don't fail the request — data is already saved
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
