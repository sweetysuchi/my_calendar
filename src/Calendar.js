import React from 'react';
import './Calendar.css';

const Calendar = ({ date }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() + firstDayOfMonth.getDay());
  const endDate = new Date(lastDayOfMonth);
  endDate.setDate(endDate.getDate() + (6 - lastDayOfMonth.getDay()));

  const calendarCells = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const isCurrentMonth = currentDate.getMonth() === date.getMonth();
    const isHighlighted = currentDate.toDateString() === date.toDateString();
    calendarCells.push(
      <div
        key={currentDate.toISOString()}
        className={`calendar-cell ${isCurrentMonth ? 'current-month' : 'other-month'} ${isHighlighted ? 'highlighted' : ''}`}
      >
        {currentDate.getDate()}
      </div>
    );
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div className="calendar">
      <div className="calendar-row">
        <div className="calendar-header" colSpan={7}>
          {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
      </div>
      <div className="calendar-row">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-header">{day}</div>
        ))}
      </div>
      <div className="calendar-days">{calendarCells}</div>
    </div>
  );
};

export default Calendar;
