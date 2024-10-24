import React from 'react';
import './link-button.css';

const LinkButton = ({ label }) => {
  const handleClick = () => {
    window.open('https://www.google.com', '_blank'); // Open Google homepage in a new tab
  };

  return (
    <button className="link-button" onClick={handleClick}>
      {label}
    </button>
  );
};

export default LinkButton;
