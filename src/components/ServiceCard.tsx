import { ReactNode } from "react";

interface ServiceCardProps {
  className: string;
  svcNumber: string;
  icon: ReactNode;
  title: ReactNode;
  subtitle: string;
  showFab?: boolean;
}

export default function ServiceCard({
  className,
  svcNumber,
  icon,
  title,
  subtitle,
  showFab = false,
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
        <div className="card-subtitle">{subtitle}</div>
      </div>
      {showFab && <div className="action-fab">&rarr;</div>}
    </article>
  );
}
