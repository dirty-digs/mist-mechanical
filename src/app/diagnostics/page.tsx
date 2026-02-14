import DashboardShell from "@/components/DashboardShell";

export default function DiagnosticsPage() {
  return (
    <DashboardShell>
      <div className="page-content">
        <h1 className="page-title">Diagnostics</h1>
        <p className="page-subtitle">System health &amp; inspection services</p>

        <div className="page-stat-row">
          <div className="page-stat">
            <div className="page-stat-value">24h</div>
            <div className="page-stat-label">Response Time</div>
          </div>
          <div className="page-stat">
            <div className="page-stat-value">100%</div>
            <div className="page-stat-label">Licensed &amp; Insured</div>
          </div>
          <div className="page-stat">
            <div className="page-stat-value">10yr</div>
            <div className="page-stat-label">Experience</div>
          </div>
          <div className="page-stat">
            <div className="page-stat-value">5&#9733;</div>
            <div className="page-stat-label">Customer Rating</div>
          </div>
        </div>

        <div className="page-section" style={{ marginTop: 32 }}>
          <h2 className="page-section-title">What We Inspect</h2>
          <div className="page-grid">
            <div className="page-card">
              <h3 className="page-card-title">Furnace &amp; Heating</h3>
              <p className="page-card-text">
                Heat exchanger inspection, combustion analysis, flue gas testing,
                filter assessment, and full safety checkout. We diagnose before
                we quote&mdash;no surprise charges.
              </p>
            </div>
            <div className="page-card">
              <h3 className="page-card-title">Plumbing Assessment</h3>
              <p className="page-card-text">
                Water pressure testing, drain camera inspection, pipe condition
                assessment, water heater diagnostics, and leak tracing for
                hidden issues behind walls and under slabs.
              </p>
            </div>
            <div className="page-card">
              <h3 className="page-card-title">Gas Safety Check</h3>
              <p className="page-card-text">
                Gas leak detection with electronic sniffers, appliance pressure
                testing, carbon monoxide monitoring, ventilation assessment,
                and compliance verification with BC gas codes.
              </p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2 className="page-section-title">Our Process</h2>
          <p className="page-text">
            Every diagnostic begins with a thorough walkthrough and conversation
            about what you&apos;re experiencing. We use professional-grade testing
            equipment to pinpoint the issue accurately. You&apos;ll receive a clear
            written report with photos, our diagnosis, and transparent pricing
            options before any work begins. No pressure, no upselling&mdash;just
            honest answers from Red Seal tradespeople.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
