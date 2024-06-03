import React, { useState } from 'react';

const Stations = () => {
  const [selectedStation, setSelectedStation] = useState('');

  const handleStationChange = (event) => {
    setSelectedStation(event.target.value);
  }

  const handlePlayStation = () => {
    // Logic to play the selected station
    console.log('Playing station:', selectedStation);
  }

  return (
    <div>
      <h2>Stations</h2>
      <div>
        <label>
          <input
            type="radio"
            value="guided_meditation"
            checked={selectedStation === 'guided_meditation'}
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
            checked={selectedStation === "nature_sounds"}
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
            checked={selectedStation === 'chakra_healing'}
            onChange={handleStationChange}
          />
          Chakra Healing Sounds
        </label>
      </div>
      <button onClick={handlePlayStation}>Play</button>
    </div>

  );
}

export default Stations;
