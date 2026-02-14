"use client";

import { useState, useMemo } from "react";

export default function AvailabilityCalendar() {
  const [selected, setSelected] = useState<number | null>(null);

  const week = useMemo(() => {
    const today = new Date();
    const days: { label: string; date: number; dayName: string; open: boolean }[] = [];
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayOfWeek = d.getDay();
      // Sunday closed, Saturday limited, rest open (simulate some booked)
      const isSunday = dayOfWeek === 0;
      const isBooked = !isSunday && (i === 2 || i === 4); // simulate some booked days
      days.push({
        label: dayNames[dayOfWeek],
        date: d.getDate(),
        dayName: dayNames[dayOfWeek],
        open: !isSunday && !isBooked,
      });
    }
    return days;
  }, []);

  const monthName = new Date().toLocaleString("en-US", { month: "short" }).toUpperCase();

  return (
    <article className="card availability-card">
      <div className="card-header">
        <span>BOOK</span>
        <span>NOW</span>
      </div>

      <div className="avail-header">
        <h3 className="avail-title">Availability</h3>
        <span className="avail-week">{monthName} / THIS WEEK</span>
      </div>

      <div className="avail-grid">
        {week.map((day, i) => (
          <div key={i}>
            <div className="avail-day-label">{day.label}</div>
            <div
              className={`avail-slot${day.open ? " open" : " booked"}${selected === i ? " selected" : ""}`}
              onClick={() => day.open && setSelected(i)}
            >
              {day.date}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="avail-cta"
        disabled={selected === null}
      >
        {selected !== null
          ? `Book ${week[selected].dayName} ${monthName} ${week[selected].date} →`
          : "Select a date above"}
      </button>
    </article>
  );
}
