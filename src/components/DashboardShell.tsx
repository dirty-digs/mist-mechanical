import NoiseOverlay from "./NoiseOverlay";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NoiseOverlay />
      <div className="dashboard">
        <Sidebar />
        <TopBar />
        {children}
      </div>
    </>
  );
}
