import DashboardShell from "@/components/DashboardShell";

export default function SystemsPage() {
  return (
    <DashboardShell>
      <div className="page-content">
        <h1 className="page-title">Systems</h1>
        <p className="page-subtitle">Residential service capabilities</p>

        <div className="page-grid">
          <div className="page-card">
            <h3 className="page-card-title">HVAC Systems</h3>
            <p className="page-card-text">
              Furnace installation &amp; repair, heat pump systems, ductwork
              design, air filtration, thermostat setup, and seasonal
              maintenance for all major residential brands.
            </p>
            <div style={{ marginTop: 12 }}>
              <span className="tag">Furnaces</span>
              <span className="tag">Heat Pumps</span>
              <span className="tag">Ductwork</span>
              <span className="tag">Mini Splits</span>
            </div>
          </div>

          <div className="page-card">
            <h3 className="page-card-title">Plumbing</h3>
            <p className="page-card-text">
              Pipe repair &amp; replacement, fixture installation, water
              heater service, drain clearing, backflow prevention, and
              re-piping for older homes throughout the Lower Mainland.
            </p>
            <div style={{ marginTop: 12 }}>
              <span className="tag">Water Heaters</span>
              <span className="tag">Drains</span>
              <span className="tag">Fixtures</span>
              <span className="tag">Re-piping</span>
            </div>
          </div>

          <div className="page-card">
            <h3 className="page-card-title">Gas Fitting</h3>
            <p className="page-card-text">
              Gas line installation, appliance hookups, leak detection,
              gas fireplace service, BBQ lines, and safety inspections.
              All work performed by licensed Class B gas fitters.
            </p>
            <div style={{ marginTop: 12 }}>
              <span className="tag">Gas Lines</span>
              <span className="tag">Fireplaces</span>
              <span className="tag">Appliance Hookup</span>
              <span className="tag">Leak Detection</span>
            </div>
          </div>
        </div>

        <div className="page-section" style={{ marginTop: 32 }}>
          <h2 className="page-section-title">Certifications</h2>
          <p className="page-text">
            All technicians hold Interprovincial Red Seal certifications recognized
            across Canada. Licensed by the BC Safety Authority and Technical Safety BC
            for gas fitting, refrigeration, and HVAC work. Fully insured with
            WorkSafeBC coverage on every job.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
