import React, { useState } from 'react';

const StandardCheckbox = () => {
  // State to manage the checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handler for checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  
  return (
    <div>
      <h2>checkbox</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        check the box 
      </label>
      <p>{isChecked ? 'Checkbox is checked' : 'Checkbox is unchecked'}</p>
    </div>
  );
};

export default StandardCheckbox;
