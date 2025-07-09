// App.js
import React, { useState, useEffect } from 'react';
import DogCard from './DogCard';
import './App.css';

function App() {
  const [dog, setDog] = useState(null);
  const [banList, setBanList] = useState([]);

  const fetchDog = async () => {
    try {
      const res = await fetch('https://api.thedogapi.com/v1/images/search?include_breed=1', {
        headers: {
          'x-api-key': process.env.REACT_APP_DOG_API_KEY
        }
      });
      const data = await res.json();
      console.log('Fetched dog:', data);

      if (!data[0].breeds || data[0].breeds.length === 0) {
        console.warn('No breed info in this dog, skipping...');
        fetchDog(); // retry
        return;
      }

      const breed = data[0].breeds[0];
      if (banList.includes(breed.name)) {
        console.warn('Breed is banned, skipping...');
        fetchDog(); // retry
        return;
      }

      setDog(data[0]);
    } catch (error) {
      console.error('Error fetching dog:', error);
    }
  };

  const handleBan = (breedName) => {
    if (!banList.includes(breedName)) {
      setBanList([...banList, breedName]);
    }
  };

  const handleUnban = (breedName) => {
    setBanList(banList.filter(name => name !== breedName));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>🐶 Discover a New Dog!</h1>
        <button onClick={fetchDog}>Discover</button>
      </div>

      {dog && <DogCard dog={dog} onBan={handleBan} />}

      <div className="ban-list">
        <h3>🚫 Ban List:</h3>
        {banList.map((name, index) => (
          <span key={index} className="ban-item" onClick={() => handleUnban(name)}>
            {name} ❌
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;