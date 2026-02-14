import NoiseOverlay from "@/components/NoiseOverlay";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import ServiceCard from "@/components/ServiceCard";
import DataBlock from "@/components/DataBlock";

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

function RefrigIcon() {
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

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <div className="dashboard">
        <Sidebar />
        <TopBar />

        <ServiceCard
          className="service-hvac"
          svcNumber="01"
          icon={<HvacIcon />}
          title={<>HVAC</>}
          subtitle="Heating, Ventilation & AC"
          showFab
        />

        <ServiceCard
          className="service-plumbing"
          svcNumber="02"
          icon={<PlumbingIcon />}
          title={<>Plumbing</>}
          subtitle="Residential & Commercial"
        />

        <DataBlock />

        <ServiceCard
          className="service-refrig"
          svcNumber="03"
          icon={<RefrigIcon />}
          title={<>Gas<br />Fitting</>}
          subtitle="Installation & Service"
          showFab
        />
      </div>
    </>
  );
}
