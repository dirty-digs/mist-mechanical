"use client";

import { useState, useMemo } from "react";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function AvailabilityCalendar() {
  const [selected, setSelected] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const weeks = useMemo(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const days: { label: string; date: number; month: string; year: number; open: boolean; past: boolean }[] = [];

    for (let i = 0; i < 21; i++) {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      const dayOfWeek = d.getDay();
      const isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isSunday = dayOfWeek === 0;
      const isBooked = !isSunday && !isPast && (i === 3 || i === 5 || i === 10 || i === 16);

      days.push({
        label: DAY_NAMES[dayOfWeek],
        date: d.getDate(),
        month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
        year: d.getFullYear(),
        open: !isSunday && !isPast && !isBooked,
        past: isPast,
      });
    }
    return days;
  }, []);

  const selectedDay = selected !== null ? weeks[selected] : null;

  const handleBook = async () => {
    if (!selectedDay) return;
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          booking_date: `${selectedDay.label} ${selectedDay.month} ${selectedDay.date}, ${selectedDay.year}`,
          name,
          phone,
        }),
      });
      setSent(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <article className="card availability-card">
        <div className="card-header">
          <span>BOOK</span>
          <span>NOW</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <p className="avail-title" style={{ marginBottom: 8 }}>Booking Requested</p>
          <p style={{ fontFamily: "var(--font-tech)", fontSize: 11, color: "rgba(0,0,0,0.5)" }}>
            {selectedDay?.label} {selectedDay?.month} {selectedDay?.date} &mdash; we&apos;ll confirm shortly.
          </p>
        </div>
      </article>
    );
  }

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

      {/* Contact fields when date selected */}
      {selected !== null && (
        <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
          <input
            type="text"
            className="intake-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: 0, flex: 1, padding: "8px 10px", fontSize: 11 }}
          />
          <input
            type="tel"
            className="intake-input"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ marginBottom: 0, flex: 1, padding: "8px 10px", fontSize: 11 }}
          />
        </div>
      )}

      <button
        type="button"
        className="avail-cta"
        disabled={selected === null || !name || !phone || sending}
        onClick={handleBook}
      >
        {sending
          ? "Sending..."
          : selectedDay
            ? `Book ${selectedDay.label} ${selectedDay.month} ${selectedDay.date} \u2192`
            : "Select a date above"}
      </button>
    </article>
  );
}
