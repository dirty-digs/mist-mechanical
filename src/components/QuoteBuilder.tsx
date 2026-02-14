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

const tiers = [
  { id: "budget", label: "Budget", desc: "Reliable brands, best value", multiplier: 0.75 },
  { id: "premium", label: "Premium", desc: "Top brands, extended warranty", multiplier: 1.0 },
  { id: "luxury", label: "Luxury", desc: "Best-in-class, smart-home ready", multiplier: 1.45 },
];

function toggleSet(set: Set<string>, id: string) {
  const next = new Set(set);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  return next;
}

export default function QuoteBuilder() {
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<Set<string>>(new Set());
  const [jobs, setJobs] = useState<Set<string>>(new Set());
  const [size, setSize] = useState("");
  const [tier, setTier] = useState("");

  const availableJobs = serviceOptions
    .filter((s) => services.has(s.id))
    .flatMap((s) => jobTypes[s.id]);

  const selectedSize = homeSize.find((s) => s.id === size);
  const selectedTier = tiers.find((t) => t.id === tier);

  const baseTotal = availableJobs
    .filter((j) => jobs.has(j.id))
    .reduce((sum, j) => sum + j.base, 0);

  const estimate =
    baseTotal > 0 && selectedSize && selectedTier
      ? Math.round(baseTotal * selectedSize.multiplier * selectedTier.multiplier)
      : null;

  const rangeLow = estimate ? Math.round(estimate * 0.85) : null;
  const rangeHigh = estimate ? Math.round(estimate * 1.2) : null;

  const reset = () => {
    setStep(0);
    setServices(new Set());
    setJobs(new Set());
    setSize("");
    setTier("");
  };

  return (
    <article className="card quote-builder">
      <div className="card-header">
        <span>QUOTE</span>
        <span>TOOL</span>
      </div>

      <div className="quote-inner">
        <div className="intake-steps" style={{ marginBottom: 12 }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`intake-step-dot${step >= i ? " active" : ""}`}
            />
          ))}
        </div>

        <h2 className="quote-heading">Quote My Build</h2>

        {/* Step 0: Multi-select services */}
        {step === 0 && (
          <div className="quote-slide">
            <p className="quote-label">What services do you need? (select all)</p>
            <div className="quote-options">
              {serviceOptions.map((svc) => (
                <button
                  key={svc.id}
                  type="button"
                  className={`quote-option${services.has(svc.id) ? " selected" : ""}`}
                  onClick={() => setServices(toggleSet(services, svc.id))}
                >
                  {svc.label}
                </button>
              ))}
            </div>
            <div className="intake-nav">
              <span />
              <button
                type="button"
                className="intake-next"
                onClick={() => setStep(1)}
                disabled={services.size === 0}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Multi-select job types */}
        {step === 1 && (
          <div className="quote-slide">
            <p className="quote-label">What do you need done? (select all)</p>
            <div className="quote-options">
              {availableJobs.map((j) => (
                <button
                  key={j.id}
                  type="button"
                  className={`quote-option${jobs.has(j.id) ? " selected" : ""}`}
                  onClick={() => setJobs(toggleSet(jobs, j.id))}
                >
                  {j.label}
                </button>
              ))}
            </div>
            <div className="intake-nav">
              <button type="button" className="intake-back" onClick={() => setStep(0)}>
                &larr; Back
              </button>
              <button
                type="button"
                className="intake-next"
                onClick={() => setStep(2)}
                disabled={jobs.size === 0}
              >
                Next &rarr;
              </button>
            </div>
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
            <button type="button" className="intake-back" onClick={() => setStep(1)}>
              &larr; Back
            </button>
          </div>
        )}

        {/* Step 3: Product tier */}
        {step === 3 && (
          <div className="quote-slide">
            <p className="quote-label">Product tier?</p>
            <div className="quote-options">
              {tiers.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`quote-option quote-tier${tier === t.id ? " selected" : ""}`}
                  onClick={() => {
                    setTier(t.id);
                    setStep(4);
                  }}
                >
                  <strong>{t.label}</strong>
                  <span className="quote-tier-desc">{t.desc}</span>
                </button>
              ))}
            </div>
            <button type="button" className="intake-back" onClick={() => setStep(2)}>
              &larr; Back
            </button>
          </div>
        )}

        {/* Step 4: Result */}
        {step === 4 && estimate !== null && rangeLow !== null && rangeHigh !== null && (
          <div className="quote-slide quote-result">
            <p className="quote-label">Estimated range</p>
            <div className="quote-price">
              ${rangeLow.toLocaleString()} &ndash; ${rangeHigh.toLocaleString()}
            </div>
            <p className="quote-disclaimer">
              {selectedTier?.label} tier &middot; {selectedSize?.label} home
              <br />
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
