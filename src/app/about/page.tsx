import DashboardShell from "@/components/DashboardShell";

export default function AboutPage() {
  return (
    <DashboardShell>
      <div className="page-content">
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">Red Seal certified / Vancouver, BC</p>

        <div className="page-section">
          <p className="page-text">
            Mist Mechanical is a residential mechanical contracting company
            based in Vancouver, British Columbia. Founded by brothers Adam and
            Daniel Farrell, we specialize in HVAC, plumbing, gas fitting, and
            refrigeration services for homeowners across the Greater Vancouver
            area. With over a decade of hands-on experience in the trade, we
            bring professional-grade expertise directly to your home.
          </p>
        </div>

        <div className="page-section">
          <h2 className="page-section-title">The Farrell Brothers</h2>
          <div className="page-team-grid">
            <div className="page-team-card">
              <div className="page-team-avatar">AF</div>
              <h3 className="page-team-name">Adam Farrell</h3>
              <div className="page-team-role">
                Co-Owner / Red Seal HVAC &amp; Refrigeration Tech
              </div>
              <p className="page-team-bio">
                Adam holds Interprovincial Red Seal certifications in
                refrigeration and air conditioning mechanics. With 10 years in
                the residential trade across British Columbia, he specializes in
                HVAC system design, heat pump installations, and refrigeration
                servicing. HRAI certified with expertise in energy-efficient
                system upgrades.
              </p>
            </div>
            <div className="page-team-card">
              <div className="page-team-avatar">DF</div>
              <h3 className="page-team-name">Daniel Farrell</h3>
              <div className="page-team-role">
                Co-Owner / Red Seal Plumber &amp; Gas Fitter
              </div>
              <p className="page-team-bio">
                Daniel holds Interprovincial Red Seal certifications in plumbing
                and gas fitting. He brings 10 years of experience in complex
                residential plumbing retrofits, gas line installations, and
                hydronic heating systems. Licensed Class B Gas Fitter with
                Technical Safety BC.
              </p>
            </div>
          </div>
        </div>

        <div className="page-section">
          <h2 className="page-section-title">What We Do</h2>
          <p className="page-text">
            We focus exclusively on residential work. No commercial projects, no
            new construction high-rises&mdash;just homes. This focus allows us to
            deliver specialist-level service on every call. Whether it&apos;s a
            furnace replacement, a leaking water heater, a gas fireplace hookup,
            or a full heat pump installation, you&apos;re getting Red Seal
            tradespeople who know residential systems inside and out.
          </p>
        </div>

        <div className="page-stat-row">
          <div className="page-stat">
            <div className="page-stat-value">10+</div>
            <div className="page-stat-label">Years in Trade</div>
          </div>
          <div className="page-stat">
            <div className="page-stat-value">4</div>
            <div className="page-stat-label">Red Seal Tickets</div>
          </div>
          <div className="page-stat">
            <div className="page-stat-value">100%</div>
            <div className="page-stat-label">Residential Focus</div>
          </div>
          <div className="page-stat">
            <div className="page-stat-value">GVA</div>
            <div className="page-stat-label">Service Area</div>
          </div>
        </div>

        <div className="page-section" style={{ marginTop: 32 }}>
          <h2 className="page-section-title">Credentials &amp; Licensing</h2>
          <p className="page-text">
            All work is performed by Interprovincial Red Seal certified
            journeypersons&mdash;the highest standard of trade certification
            recognized across Canada. We are licensed and regulated by the BC
            Safety Authority and Technical Safety BC for all gas and refrigeration
            work. Fully insured with comprehensive general liability coverage and
            WorkSafeBC compliance on every job site. Our certifications include:
          </p>
          <div style={{ marginTop: 12 }}>
            <span className="tag">Red Seal Plumber</span>
            <span className="tag">Red Seal Refrigeration Mechanic</span>
            <span className="tag">Red Seal HVAC</span>
            <span className="tag">Class B Gas Fitter</span>
            <span className="tag">Technical Safety BC</span>
            <span className="tag">WorkSafeBC</span>
            <span className="tag">HRAI Certified</span>
          </div>
        </div>

        <div className="page-section">
          <h2 className="page-section-title">Why Mist Mechanical</h2>
          <p className="page-text">
            Adam and Daniel grew up in the Vancouver area and built their careers
            working alongside some of the best mechanical contractors in British
            Columbia. After a decade of refining their craft, they started Mist
            Mechanical to deliver something they felt was missing in the
            residential market: genuine expertise without the runaround. No
            subcontractors, no apprentices sent solo to your home. When you book
            with Mist Mechanical, you get a Red Seal journeyperson at your door
            who can diagnose, quote, and complete the work&mdash;often in a
            single visit.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
