import DashboardShell from "@/components/DashboardShell";
import IntakeForm from "@/components/IntakeForm";
import ServiceAreaMap from "@/components/ServiceAreaMap";

export default function ClientsPage() {
  return (
    <DashboardShell>
      <div className="page-content">
        <h1 className="page-title">Clients</h1>
        <p className="page-subtitle">Request service or get in touch</p>

        <ServiceAreaMap />

        <div
          className="page-grid"
          style={{ gridTemplateColumns: "1fr 1fr", marginTop: 32 }}
        >
          <div>
            <div className="page-section">
              <h2 className="page-section-title">Hours</h2>
              <p className="page-text">
                Monday&ndash;Friday: 7:00 AM &ndash; 6:00 PM<br />
                Saturday: 8:00 AM &ndash; 2:00 PM<br />
                Sunday: Closed<br />
                <br />
                Emergency service available for gas leaks
                and no-heat situations.
              </p>
            </div>

            <div className="page-section">
              <h2 className="page-section-title">Contact</h2>
              <p className="page-text">
                Phone: (604) 555-MIST<br />
                Email: info@mistmechanical.ca<br />
                Vancouver, BC
              </p>
            </div>
          </div>

          <div>
            <IntakeForm />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
