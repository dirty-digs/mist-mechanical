"use client";

import { useState, useMemo } from "react";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function AvailabilityCalendar() {
  const [selected, setSelected] = useState<number | null>(null);

  const weeks = useMemo(() => {
    const today = new Date();
    // Find the most recent Sunday (start of current week)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const days: { label: string; date: number; month: string; open: boolean; past: boolean }[] = [];

    for (let i = 0; i < 21; i++) {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      const dayOfWeek = d.getDay();
      const isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isSunday = dayOfWeek === 0;
      // Simulate some booked days
      const isBooked = !isSunday && !isPast && (i === 3 || i === 5 || i === 10 || i === 16);

      days.push({
        label: DAY_NAMES[dayOfWeek],
        date: d.getDate(),
        month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
        open: !isSunday && !isPast && !isBooked,
        past: isPast,
      });
    }
    return days;
  }, []);

  const selectedDay = selected !== null ? weeks[selected] : null;

  return (
    <article className="card availability-card">
      <div className="card-header">
        <span>BOOK</span>
        <span>NOW</span>
      </div>

      <div className="avail-header">
        <h3 className="avail-title">Availability</h3>
        <span className="avail-week">3-WEEK VIEW</span>
      </div>

      {/* Column headers */}
      <div className="avail-grid">
        {DAY_NAMES.map((d) => (
          <div key={d} className="avail-day-label">{d}</div>
        ))}
      </div>

      {/* 3 week rows */}
      {[0, 1, 2].map((weekIdx) => (
        <div className="avail-grid" key={weekIdx} style={{ marginBottom: 4 }}>
          {weeks.slice(weekIdx * 7, weekIdx * 7 + 7).map((day, i) => {
            const globalIdx = weekIdx * 7 + i;
            const isClosed = !day.open && !day.past;
            return (
              <div
                key={globalIdx}
                className={`avail-slot${day.open ? " open" : ""}${day.past ? " past" : ""}${isClosed ? " booked" : ""}${selected === globalIdx ? " selected" : ""}`}
                onClick={() => day.open && setSelected(globalIdx)}
              >
                {day.date}
              </div>
            );
          })}
        </div>
      ))}

      <button
        type="button"
        className="avail-cta"
        disabled={selected === null}
      >
        {selectedDay
          ? `Book ${selectedDay.label} ${selectedDay.month} ${selectedDay.date} →`
          : "Select a date above"}
      </button>
    </article>
  );
}
