import React from 'react';

function DogCard({ dog, onBan }) {
  if (!dog || !dog.breeds || dog.breeds.length === 0) {
    return <p>No breed data found.</p>;
  }

  const breed = dog.breeds[0];

  return (
    <div className="dog-card">
      <img
        src={dog.url}
        alt={breed.name || "Unknown Breed"}
        className="dog-image"
      />
      <h2>{breed.name || "Unknown Breed"}</h2>
      <p><strong>Origin:</strong> {breed.origin || "Unknown"}</p>
      <p><strong>Temperament:</strong> {breed.temperament || "Not listed"}</p>

      <button onClick={() => onBan(breed.name)}>
        🚫 Ban "{breed.name}"
      </button>
    </div>
  );
}

export default DogCard;
