import PropertyCard from './PropertyCard'; 
import React, { useState } from 'react';

export function renderProperties(properties, openPopup) {
  return properties.map((property) => (
    <div key={property.name}>
      <PropertyCard
        image={property.image}
        name={property.name}
        price={property.price}
        bedrooms={property.bedrooms}
        address={property.address}
        openPopup={openPopup} 
      />
    </div>
  ));
}



 export function filterPropertiesByBedrooms(properties, bedrooms) {
  if (bedrooms === 'all' || isNaN(bedrooms)) {
    return properties;
  }

  const bedroomCountFilter = parseInt(bedrooms, 10); 

  return properties.filter(property => {
    const bedroomText = `Quartos: ${property.bedrooms}`;
    const match = bedroomText.match(/Quartos: (\d+)/); 

    if (match) {
      const bedroomCount = parseInt(match[1], 10);
      return bedroomCount === bedroomCountFilter; 
    }

    return false;
  });
}
