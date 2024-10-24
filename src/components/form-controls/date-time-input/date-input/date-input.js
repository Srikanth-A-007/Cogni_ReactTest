import React, { useState, useEffect } from 'react';
import './date-input.css'; // Custom CSS

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [error, setError] = useState(null); // Error state
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Helper functions to generate calendar days
  const generateCalendarDays = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null); // Empty cells for days before the first of the month
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day); // Add each day of the month
    }
    return calendarDays;
  };

  const [calendarDays, setCalendarDays] = useState(generateCalendarDays(currentYear, currentMonth));

  // Update calendar whenever the year/month changes
  useEffect(() => {
    setCalendarDays(generateCalendarDays(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

  // Handle date selection
  const handleDateClick = (day) => {
    if (!day) return;
    const selected = `${currentMonth + 1}/${day}/${currentYear}`;

    // Validation check
    const isValidDate = new Date(selected).getDate() === day;
    if (isValidDate) {
      setSelectedDate(selected);
      setError(null); // Clear previous error
    } else {
      setError('Invalid date selected');
    }

    setShowCalendar(false); // Hide calendar after selection
  };

  // Handle month change
  const handleMonthChange = (event) => {
    setCurrentMonth(Number(event.target.value));
  };

  // Handle year change
  const handleYearChange = (event) => {
    setCurrentYear(Number(event.target.value));
  };

  return (
    <div className="date-picker-container">
      <div className="date-picker-wrapper">
        <input
          type="text"
          placeholder="MM/DD/YYYY"
          value={selectedDate}
          onFocus={() => setShowCalendar(true)}
          readOnly
          className="date-picker-input"
        />
        <span className="calendar-icon" onClick={() => setShowCalendar(!showCalendar)}>&#128197;</span>
      </div>

      {error && <div className="error-message">{error}</div>} {/* Display error message */}

      {showCalendar && (
        <div className="calendar-container animate">
          <div className="calendar-header">
            <select value={currentMonth} onChange={handleMonthChange}>
              {Array.from({ length: 12 }, (_, index) => (
                <option key={index} value={index}>
                  {new Date(0, index).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
            <select value={currentYear} onChange={handleYearChange}>
              {Array.from({ length: 21 }, (_, index) => (
                <option key={index} value={currentYear - 10 + index}>
                  {currentYear - 10 + index}
                </option>
              ))}
            </select>
          </div>

          <div className="calendar-grid">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="calendar-day-name">{day}</div>
            ))}
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`calendar-day ${day ? '' : 'empty'}`}
                onClick={() => day && handleDateClick(day)}
              >
                {day || ''}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
