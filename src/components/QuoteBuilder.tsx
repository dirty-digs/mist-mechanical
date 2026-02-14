"use client";

import { useState } from "react";

const serviceOptions = [
  { id: "hvac", label: "HVAC" },
  { id: "plumbing", label: "Plumbing" },
  { id: "gas", label: "Gas Fitting" },
];

const jobTypes: Record<string, { id: string; label: string; base: number }[]> = {
  hvac: [
    { id: "furnace-install", label: "Furnace Install", base: 4500 },
    { id: "furnace-repair", label: "Furnace Repair", base: 350 },
    { id: "heat-pump", label: "Heat Pump Install", base: 7500 },
    { id: "mini-split", label: "Mini Split Install", base: 3800 },
    { id: "duct-cleaning", label: "Duct Cleaning", base: 400 },
    { id: "maintenance", label: "Annual Maintenance", base: 180 },
  ],
  plumbing: [
    { id: "water-heater", label: "Water Heater Install", base: 2200 },
    { id: "water-heater-repair", label: "Water Heater Repair", base: 300 },
    { id: "drain-clearing", label: "Drain Clearing", base: 250 },
    { id: "fixture-install", label: "Fixture Install", base: 350 },
    { id: "re-pipe", label: "Re-piping", base: 5500 },
    { id: "leak-repair", label: "Leak Repair", base: 275 },
  ],
  gas: [
    { id: "gas-line", label: "Gas Line Install", base: 1200 },
    { id: "fireplace", label: "Gas Fireplace Hookup", base: 800 },
    { id: "bbq-line", label: "BBQ Line Install", base: 600 },
    { id: "appliance", label: "Appliance Hookup", base: 350 },
    { id: "leak-detect", label: "Leak Detection", base: 200 },
    { id: "safety-inspect", label: "Safety Inspection", base: 150 },
  ],
};

const homeSize = [
  { id: "small", label: "< 1,000 sqft", multiplier: 0.85 },
  { id: "medium", label: "1,000–2,500 sqft", multiplier: 1.0 },
  { id: "large", label: "2,500+ sqft", multiplier: 1.25 },
];

export default function QuoteBuilder() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [job, setJob] = useState("");
  const [size, setSize] = useState("");

  const selectedJob = service
    ? jobTypes[service]?.find((j) => j.id === job)
    : null;
  const selectedSize = homeSize.find((s) => s.id === size);

  const estimate = selectedJob && selectedSize
    ? Math.round(selectedJob.base * selectedSize.multiplier)
    : null;

  const rangeLow = estimate ? Math.round(estimate * 0.85) : null;
  const rangeHigh = estimate ? Math.round(estimate * 1.2) : null;

  const reset = () => {
    setStep(0);
    setService("");
    setJob("");
    setSize("");
  };

  return (
    <article className="card quote-builder">
      <div className="card-header">
        <span>QUOTE</span>
        <span>TOOL</span>
      </div>

      <div className="quote-inner">
        {/* Progress */}
        <div className="intake-steps" style={{ marginBottom: 12 }}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`intake-step-dot${step >= i ? " active" : ""}`}
            />
          ))}
        </div>

        <h2 className="quote-heading">Quote My Build</h2>

        {/* Step 0: Pick service */}
        {step === 0 && (
          <div className="quote-slide">
            <p className="quote-label">What type of service?</p>
            <div className="quote-options">
              {serviceOptions.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  className={`quote-option${service === svc.id ? " selected" : ""}`}
                  onClick={() => {
                    setService(svc.id);
                    setJob("");
                    setStep(1);
                  }}
                >
                  {svc.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Pick job type */}
        {step === 1 && service && (
          <div className="quote-slide">
            <p className="quote-label">What do you need done?</p>
            <div className="quote-options">
              {jobTypes[service].map((j) => (
                <button
                  key={j.id}
                  type="button"
                  className={`quote-option${job === j.id ? " selected" : ""}`}
                  onClick={() => {
                    setJob(j.id);
                    setStep(2);
                  }}
                >
                  {j.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="intake-back"
              onClick={() => setStep(0)}
            >
              &larr; Back
            </button>
          </div>
        )}

        {/* Step 2: Home size */}
        {step === 2 && (
          <div className="quote-slide">
            <p className="quote-label">Home size?</p>
            <div className="quote-options">
              {homeSize.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`quote-option${size === s.id ? " selected" : ""}`}
                  onClick={() => {
                    setSize(s.id);
                    setStep(3);
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="intake-back"
              onClick={() => setStep(1)}
            >
              &larr; Back
            </button>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 3 && estimate !== null && rangeLow !== null && rangeHigh !== null && (
          <div className="quote-slide quote-result">
            <p className="quote-label">Estimated range</p>
            <div className="quote-price">
              ${rangeLow.toLocaleString()} &ndash; ${rangeHigh.toLocaleString()}
            </div>
            <p className="quote-disclaimer">
              Based on typical residential rates in the Greater Vancouver area.
              Final pricing depends on site conditions and materials.
            </p>
            <div className="intake-nav">
              <button type="button" className="intake-back" onClick={reset}>
                &larr; Start over
              </button>
              <button type="button" className="intake-submit">
                Book Now &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
