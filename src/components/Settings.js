import React, { useState } from 'react';

const Settings = () => {
  const [preferredStation, setPreferredStation] = useState('');

  const handleStationChange = (event) => {
    setPreferredStation(event.target.value);
  }

  const handleSaveSettings = () => {
    // Logic to save the settings
    console.log('Saved preferred station:', preferredStation);
  }

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          <input
            type="radio"
            value="guided_meditation"
            checked={preferredStation === 'guided_meditation'}
            onChange={handleStationChange}
          />
          Guided Meditation
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="nature_sounds"
            checked={preferredStation === 'nature_sounds'}
            onChange={handleStationChange}
          />
          Nature Sounds
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="chakra_healing"
            checked={preferredStation === 'chakra_healing'}
            onChange={handleStationChange}
          />
          Chakra Healing Sounds
        </label>
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
}

export default Settings;