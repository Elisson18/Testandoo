import React from 'react';

const PropertyCard = ({ image, name, price, bedrooms, address, openPopup }) => {
  return (
    <div className="carousel-card">
      <img src={image} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>Preço: R${price}</p>
        <p>Quartos: {bedrooms}</p>
        <p>Endereço: {address}</p>
        <button onClick={() => openPopup({ image, name, price, bedrooms, address })}>
          Agendar Visita
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
