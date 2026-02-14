import DashboardShell from "@/components/DashboardShell";
import ServiceCard from "@/components/ServiceCard";
import DataBlock from "@/components/DataBlock";
import QuoteBuilder from "@/components/QuoteBuilder";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

function HvacIcon() {
  return <div className="icon-diagram" />;
}

function PlumbingIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 6 C32 6 10 32 10 42 C10 54 20 58 32 58 C44 58 54 54 54 42 C54 32 32 6 32 6Z"
        stroke="#1C2836"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M32 18 C32 18 20 34 20 40 C20 48 26 50 32 50 C38 50 44 48 44 40 C44 34 32 18 32 18Z"
        stroke="#1C2836"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

function GasIcon() {
  return (
    <div style={{ position: "relative", width: 100, height: 100, marginBottom: 20 }}>
      <div
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          border: "1px solid black",
          borderRadius: "50%",
          left: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 60,
          height: 60,
          background: "#6A8CAE",
          borderRadius: "50%",
          right: 0,
          opacity: 0.8,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}

function HvacIconSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#1C2836" strokeWidth="1" />
      <circle cx="12" cy="12" r="5" stroke="#1C2836" strokeWidth="0.8" />
      <line x1="4" y1="4" x2="20" y2="20" stroke="#1C2836" strokeWidth="0.8" />
    </svg>
  );
}

function PlumbingIconSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 C12 3 4 13 4 16.5 C4 20.5 8 22 12 22 C16 22 20 20.5 20 16.5 C20 13 12 3 12 3Z" stroke="#1C2836" strokeWidth="1" fill="none" />
    </svg>
  );
}

function GasIconSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="12" r="7" stroke="#1C2836" strokeWidth="0.8" fill="none" />
      <circle cx="15" cy="12" r="7" fill="#6A8CAE" opacity="0.4" />
    </svg>
  );
}

export default function Home() {
  return (
    <DashboardShell>
      {/* Mobile hero — hidden on desktop */}
      <div className="mobile-hero">
        <div className="mobile-services-row">
          <div className="mobile-svc-badge" style={{ backgroundColor: "var(--c-green)" }}>
            <HvacIconSmall />
            <span>HVAC</span>
          </div>
          <div className="mobile-svc-badge" style={{ backgroundColor: "var(--c-gray-mid)" }}>
            <PlumbingIconSmall />
            <span>Plumbing</span>
          </div>
          <div className="mobile-svc-badge" style={{ backgroundColor: "var(--c-orange)" }}>
            <GasIconSmall />
            <span>Gas Fitting</span>
          </div>
        </div>
        <p className="mobile-slogan">Your home. Our expertise.</p>
        <p className="mobile-sub-slogan">Residential specialists serving Greater Vancouver</p>
      </div>

      <QuoteBuilder />
      <AvailabilityCalendar />

      <ServiceCard
        className="service-plumbing"
        svcNumber="02"
        icon={<PlumbingIcon />}
        title={<>Plumbing</>}
        subtitle="Residential Specialists"
        ridge="center"
        backTitle="Plumbing Services"
        backItems={[
          "Water Heater Install & Repair",
          "Drain Clearing & Camera Inspection",
          "Fixture & Faucet Install",
          "Whole-Home Re-piping",
          "Leak Detection & Repair",
          "Bathroom & Kitchen Rough-ins",
        ]}
      />

      <DataBlock />

      <ServiceCard
        className="service-hvac"
        svcNumber="01"
        icon={<HvacIcon />}
        title={<>HVAC</>}
        subtitle="Heating, Ventilation & AC"
        ridge="left"
        backTitle="HVAC Services"
        backItems={[
          "Furnace Install & Repair",
          "Heat Pump Systems",
          "Mini Split Installation",
          "Duct Cleaning & Sealing",
          "Annual Maintenance Plans",
          "Air Quality & Filtration",
        ]}
      />

      <ServiceCard
        className="service-refrig"
        svcNumber="03"
        icon={<GasIcon />}
        title={<>Gas<br />Fitting</>}
        subtitle="Installation & Service"
        ridge="right"
        backTitle="Gas Fitting Services"
        backItems={[
          "Gas Line Installation",
          "Gas Fireplace Hookup",
          "BBQ & Outdoor Line Install",
          "Appliance Hookup",
          "Leak Detection & Testing",
          "Safety Inspections",
        ]}
      />
    </DashboardShell>
  );
}
