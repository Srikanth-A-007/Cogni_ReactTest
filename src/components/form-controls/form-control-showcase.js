// C:\Users\Srikanth Anguluri\cogni_reacttest\src\components\form-controls\form-control-showcase.js
import React from 'react';
import LinkButton from './button/link/link-button'; // Update the path to link-button.js
import CurrencyInput from './currency-input/default-curreny-input/default-curreny-input';

const FormControlShowcase = () => {
  return (
    <div>
      {/* Example Button styled as a link with onClick behavior */}
      <LinkButton 
        label="Click me" 
        onClick={() => window.open('https://www.google.com', '_blank')} // Open Google homepage in a new tab
      />
      <CurrencyInput/> 

    </div>
  );
};

export default FormControlShowcase;
