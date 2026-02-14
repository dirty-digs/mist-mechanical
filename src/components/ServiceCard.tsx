import { ReactNode } from "react";

interface ServiceCardProps {
  className: string;
  svcNumber: string;
  icon: ReactNode;
  title: ReactNode;
  subtitle: string;
  showFab?: boolean;
  ridge?: "left" | "center" | "right";
}

/* Each path is designed so the right edge of one card matches the left edge of the next,
   forming one continuous mountain ridge across all three cards. */
const ridgePaths: Record<string, string> = {
  left:   "M0,18 L8,15 18,11 28,13 40,7 52,10 62,5 72,9 82,6 92,8 100,10",
  center: "M0,10 L10,8 18,5 28,3 40,9 50,6 60,4 72,7 82,3 92,6 100,8",
  right:  "M0,8 L10,6 20,4 32,8 42,5 52,9 62,7 74,11 84,14 92,16 100,18",
};

export default function ServiceCard({
  className,
  svcNumber,
  icon,
  title,
  subtitle,
  showFab = false,
  ridge,
}: ServiceCardProps) {
  return (
    <article className={`card ${className}`}>
      <div className="card-header">
        <span>SVC</span>
        <span>{svcNumber}</span>
      </div>
      <div className="card-body">
        {icon}
        <h2 className="card-title">{title}</h2>
        <div className="card-subtitle">
          {ridge ? (
            <svg
              viewBox="0 0 100 22"
              preserveAspectRatio="none"
              className="ridge-line"
            >
              <polyline
                points={ridgePaths[ridge]}
                stroke="currentColor"
                strokeWidth="0.8"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          ) : null}
          <span className="card-subtitle-text">{subtitle}</span>
        </div>
      </div>
      {showFab && <div className="action-fab">&rarr;</div>}
    </article>
  );
}
