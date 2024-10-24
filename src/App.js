// src/App.js
import React from 'react';
import StandardButton from './components/standard_button/standard button';
import StandardTextbox from './components/standard textbox/standard textbox';
import StandardCheckbox from './components/standard checkbox/standard checkbox';
import StandardDropdown from './components/standard dropdown/standard dropdown';
import StandardTile from './components/standard-tile/standard-tile';
import StandardRadioButton from './components/standard-radio-button/standard-radio-button'; // Change the import name to StandardRadioButton
import Showcase from './showcase';

function App() {
  return (
    <div className="app-container">
      <h1>Hello Cogni</h1>
      <StandardButton />
      <StandardTextbox />
      <StandardDropdown />
      <StandardCheckbox />
      <StandardRadioButton /> {/* Updated component usage */}
      <Showcase /> {/* Correctly capitalize the component name */}
      
      <div className="tile-container">
        <StandardTile 
          imageUrl="https://via.placeholder.com/200" 
          title="Tile 1" 
        />
        <StandardTile 
          imageUrl="https://via.placeholder.com/200" 
          title="Tile 2" 
        />
        <StandardTile 
          imageUrl="https://via.placeholder.com/200" 
          title="Tile 3" 
        />
      </div>
    </div>
  );
}

export default App;
