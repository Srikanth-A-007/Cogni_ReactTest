// LinkButton.js
import React from 'react';
import './link-button.css';

const LinkButton = ({ label, onClick }) => {
  return (
    <button className="link-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default LinkButton;
