export default function TopBar() {
  return (
    <header className="top-bar">
      <div className="ticker-text">
        <span>// Area Pressure: 101.3 kPa</span>
        <span>// Humidity: 45%</span>
        <span>// Grid: Active</span>
      </div>
      <div className="system-status">
        OPERATIONAL
        <div className="status-dot" />
      </div>
    </header>
  );
}
