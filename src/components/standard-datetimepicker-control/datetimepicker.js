import React, { useState } from 'react';
import './DateTimePicker.css'; // Import your custom CSS

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState({
    hours: selectedDate.getHours(),
    minutes: selectedDate.getMinutes(),
    ampm: selectedDate.getHours() >= 12 ? 'PM' : 'AM'
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleDateChange = (day) => {
    const updatedDate = new Date(selectedDate);
    updatedDate.setDate(day);
    setSelectedDate(updatedDate);
  };

  const handleMonthChange = (event) => {
    const updatedDate = new Date(selectedDate);
    updatedDate.setMonth(event.target.value);
    setSelectedDate(updatedDate);
  };

  const handleYearChange = (event) => {
    const updatedDate = new Date(selectedDate);
    updatedDate.setFullYear(event.target.value);
    setSelectedDate(updatedDate);
  };

  const handleTimeChange = (event) => {
    const { name, value } = event.target;
    setSelectedTime((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleApply = () => {
    const { hours, minutes, ampm } = selectedTime;
    const finalHours = ampm === 'PM' ? parseInt(hours) + 12 : hours;
    const finalDate = new Date(selectedDate);
    finalDate.setHours(finalHours);
    finalDate.setMinutes(minutes);

    alert(`Selected Date & Time: ${finalDate}`);
  };

  return (
    <div className="datetime-picker">
      <div className="header">
        <select value={selectedDate.getMonth()} onChange={handleMonthChange}>
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>

        <select value={selectedDate.getFullYear()} onChange={handleYearChange}>
          {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <span className="calendar-icon">&#128197;</span>
      </div>

      <div className="calendar">
        <div className="days-of-week">
          {daysOfWeek.map((day, index) => (
            <span key={index} className="day-name">{day}</span>
          ))}
        </div>
        <div className="dates">
          {Array.from({ length: 31 }, (_, day) => (
            <span
              key={day}
              className={`date ${selectedDate.getDate() === day + 1 ? 'selected' : ''}`}
              onClick={() => handleDateChange(day + 1)}
            >
              {day + 1}
            </span>
          ))}
        </div>
      </div>

      <div className="time-picker">
        <input
          type="number"
          name="hours"
          value={selectedTime.hours}
          onChange={handleTimeChange}
          min="1"
          max="12"
        />
        :
        <input
          type="number"
          name="minutes"
          value={selectedTime.minutes}
          onChange={handleTimeChange}
          min="0"
          max="59"
        />
        <select name="ampm" value={selectedTime.ampm} onChange={handleTimeChange}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>

      <div className="actions">
        <button className="cancel-button">Cancel</button>
        <button className="apply-button" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};

export default DateTimePicker;
