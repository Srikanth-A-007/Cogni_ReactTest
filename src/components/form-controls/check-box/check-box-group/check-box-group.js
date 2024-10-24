import React, { useState } from 'react';

const CheckboxGroup = () => {
  // State to manage the checked state of each checkbox
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Options for the checkbox group
  const options = [
    { id: 'Intern', label: 'Intern' },
    { id: 'Associate software engineer', label: 'Associate software engineer' },
    { id: 'Software engineer', label: 'Software engineer' },
  ];

  // Handler for checkbox change
  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedOptions(prevSelected =>
      prevSelected.includes(value)
        ? prevSelected.filter(option => option !== value) // Uncheck
        : [...prevSelected, value] // Check
    );
  };

  return (
    <div>
      <h2>Select all the previous designations</h2>
      {options.map(option => (
        <div><label key={option.id}>
          <input
            type="checkbox"
            value={option.id}
            checked={selectedOptions.includes(option.id)}
            onChange={handleCheckboxChange}
          />
          {option.label}
        </label></div>
       
      ))}
      <div>
        <h3>Selected Options:</h3>
        <p>{selectedOptions.join(', ') || 'None'}</p>
      </div>
    </div>
  );
};

export default CheckboxGroup;
