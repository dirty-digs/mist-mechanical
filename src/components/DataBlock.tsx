"use client";

import { useState } from "react";

const services = [
  { id: "hvac", label: "HVAC", icon: "&#9711;" },
  { id: "plumbing", label: "Plumbing", icon: "&#9651;" },
  { id: "gas", label: "Gas Fitting", icon: "&#9672;" },
];

export default function DataBlock() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "service-request",
          services: Array.from(selected),
          name,
          phone,
          message,
        }),
      });
      setSent(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <article className="card data-block">
        <div className="card-header">
          <span>NEW</span>
          <span>REQUEST</span>
        </div>
        <div className="intake-form" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <p className="intake-heading">Request Sent</p>
          <p style={{ fontFamily: "var(--font-tech)", fontSize: 11, color: "#666" }}>
            We&apos;ll be in touch shortly.
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="card data-block">
      <div className="card-header">
        <span>NEW</span>
        <span>REQUEST</span>
      </div>

      <div className="intake-form">
        <div className="intake-steps">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`intake-step-dot${step >= i ? " active" : ""}`}
            />
          ))}
        </div>

        {step === 0 && (
          <div className="intake-slide">
            <p className="intake-heading">How can we help?</p>
            <div className="service-options">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  className={`service-option${selected.has(svc.id) ? " selected" : ""}`}
                  onClick={() => toggle(svc.id)}
                >
                  <span
                    className="service-option-icon"
                    dangerouslySetInnerHTML={{ __html: svc.icon }}
                  />
                  <span className="service-option-label">{svc.label}</span>
                </button>
              ))}
            </div>
            <div className="intake-nav">
              <span />
              <button
                type="button"
                className="intake-next"
                onClick={() => setStep(1)}
                disabled={selected.size === 0}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="intake-slide">
            <p className="intake-heading">Your details</p>
            <input
              type="text"
              className="intake-input"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <input
              type="tel"
              className="intake-input"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="intake-nav">
              <button type="button" className="intake-back" onClick={() => setStep(0)}>
                &larr; Back
              </button>
              <button
                type="button"
                className="intake-next"
                onClick={() => setStep(2)}
                disabled={!name || !phone}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="intake-slide">
            <p className="intake-heading">Describe the issue</p>
            <textarea
              className="intake-input intake-textarea"
              placeholder="What's going on? Any details help..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus
            />
            <div className="intake-nav">
              <button type="button" className="intake-back" onClick={() => setStep(1)}>
                &larr; Back
              </button>
              <button
                type="button"
                className="intake-submit"
                onClick={handleSubmit}
                disabled={sending}
              >
                {sending ? "Sending..." : "Submit Request \u2192"}
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
