"use client";

import { useState } from "react";

const services = [
  { id: "hvac", label: "HVAC", icon: "&#9711;" },
  { id: "plumbing", label: "Plumbing", icon: "&#9651;" },
  { id: "gas", label: "Gas Fitting", icon: "&#9672;" },
];

export default function DataBlock() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <article className="card data-block">
      <div className="card-header">
        <span>NEW</span>
        <span>REQUEST</span>
      </div>

      <div className="intake-form">
        {/* Step indicators */}
        <div className="intake-steps">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`intake-step-dot${step >= i ? " active" : ""}`}
            />
          ))}
        </div>

        {/* Step 0: Choose service */}
        {step === 0 && (
          <div className="intake-slide">
            <p className="intake-heading">How can we help?</p>
            <div className="service-options">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  className={`service-option${service === svc.id ? " selected" : ""}`}
                  onClick={() => {
                    setService(svc.id);
                    setStep(1);
                  }}
                >
                  <span
                    className="service-option-icon"
                    dangerouslySetInnerHTML={{ __html: svc.icon }}
                  />
                  <span className="service-option-label">{svc.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Contact info */}
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
              <button
                type="button"
                className="intake-back"
                onClick={() => setStep(0)}
              >
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

        {/* Step 2: Describe issue */}
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
              <button
                type="button"
                className="intake-back"
                onClick={() => setStep(1)}
              >
                &larr; Back
              </button>
              <button
                type="button"
                className="intake-submit"
              >
                Submit Request &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
