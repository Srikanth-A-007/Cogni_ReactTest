import React, { useState } from 'react';
import './duration-input.css'; // Import the CSS file for styling

const DurationPicker = () => {
  const [type, setType] = useState('hours'); // Default selection is 'hours'
  const [value, setValue] = useState(1);

  // Conversion factors for each time unit
  const conversionFactors = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
  };

  // Ensure value is 0 if less than 1
  const ensureNonNegativeAndMinOne = (value) => (value < 1 ? 0 : value);

  // Handle type change and convert the current value accordingly
  const handleTypeChange = (e) => {
    const newType = e.target.value;

    // Convert the current value to seconds (smallest unit)
    const currentValueInSeconds = value * conversionFactors[type];

    // Convert from seconds to the new selected unit
    let newValue = currentValueInSeconds / conversionFactors[newType];

    // Make sure the new value is at least 1, otherwise set it to 0
    newValue = ensureNonNegativeAndMinOne(newValue);

    setType(newType);
    setValue(newValue);
  };

  // Handle value change with no restrictions
  const handleValueChange = (e) => {
    let selectedValue = parseFloat(e.target.value) || 0;
    
    // Ensure the value is at least 1, otherwise set it to 0
    selectedValue = ensureNonNegativeAndMinOne(selectedValue);

    setValue(selectedValue);
  };

  return (
    <div className="duration-picker">
      <label className="label">Duration Input</label>
      <div className="value-controls">
        <input
          type="number"
          value={value}
          onChange={handleValueChange}
          className="duration-input"
          min="0"
          step="any" // Allow decimals, but enforce minimum of 1 or 0
        />
        <select value={type} onChange={handleTypeChange} className="duration-select">
          <option value="hours">Hours</option>
          <option value="minutes">Minutes</option>
          <option value="seconds">Seconds</option>
          <option value="days">Days</option> {/* No restriction on days */}
        </select>
      </div>
    </div>
  );
};

export default DurationPicker;
