// C:\Users\Srikanth Anguluri\cogni_reacttest\src\components\form-controls\form-control-showcase.js
import React from 'react';
import LinkButton from './button/link/link-button'; // Update the path to link-button.js
// import datepicker from './date-time-input/date-input/date-input';
// import DateTimePicker from './;//updated datepicker
import CustomDatePicker from './date-time-input/date-input/date-input';
//import DateTimePicker from './date-time-input/date-time-input/date-time-input';
import DurationPicker from './date-time-input/duration-input/duration-input';
const FormControlShowcase = () => {
  return (
    <div>
      {/* Example Button styled as a link with onClick behavior */}
      <LinkButton 
        label="Click me" 
        onClick={() => window.open('https://www.google.com', '_blank')} // Open Google homepage in a new tab
      />
    <CustomDatePicker/>
    {/*<DateTimePicker/>*/}
   <DurationPicker/>
    </div>
  );
};

export default FormControlShowcase;
