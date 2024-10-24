import React from 'react';
import LinkButton from './button/link/link-button'; // Update the path to link-button.js
// import datepicker from './date-time-input/date-input/date-input';
// import DateTimePicker from './;//updated datepicker
import CustomDatePicker from './date-time-input/date-input/date-input';
//import DateTimePicker from './date-time-input/date-time-input/date-time-input';
import DurationPicker from './date-time-input/duration-input/duration-input';
import StandardCheckbox from './check-box/standard-checkbox/standard-checkbox';
import CheckboxGroup from './check-box/check-box-group/check-box-group';

const FormControlShowcase = () => {
  return (
    <div>
      {/* Example Button styled as a link with onClick behavior */}
      <LinkButton 
        label="Go to Google"  // Provide the label for the button
      />
    <CustomDatePicker/>
    {/*<DateTimePicker/>*/}
   <DurationPicker/>
      <StandardCheckbox/>
      <CheckboxGroup/>
      
    </div>
  );
};

export default FormControlShowcase;
