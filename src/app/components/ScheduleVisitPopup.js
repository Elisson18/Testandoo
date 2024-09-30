import React, { useState } from 'react';
import { scheduleVisit } from '../visitService';

const ScheduleVisitPopup = ({ property, onClose }) => {
  const [selectedDate, setSelectedDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  if (!property) return null; 

  const extractPropertyNumber = (propertyName) => {
    const match = propertyName.match(/\d+/); 
    return match ? parseInt(match[0], 10) : null; 
  };

  const handleConfirm = async () => {
    const propertyNumber = extractPropertyNumber(property.name); 

    console.log('Agendando visita com:', { 
      propertyNumber, 
      visitDay: selectedDate.day, 
      visitMonth: selectedDate.month, 
      visitYear: selectedDate.year,
      bedrooms: property.bedrooms 
    });
  

    const result = await scheduleVisit(
      propertyNumber,
      selectedDate.day,
      selectedDate.month,
      selectedDate.year,
      property.bedrooms 
    );
  
    if (result) {
      alert(`Você agendou uma visita para: ${property.name} na data ${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`);
      onClose();
    } else {
      alert(`Você agendou uma visita para: ${property.name} na data ${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`)
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Agendar Visita</h2>
        <p>Você quer agendar uma visita para:</p>
        <p><strong>Nome:</strong> {property.name}</p>
        <p><strong>Preço:</strong> R${property.price}</p>
        <p><strong>Quartos:</strong> {property.bedrooms}</p>
        <p><strong>Endereço:</strong> {property.address}</p>

        {/* Seletor de data */}
        <div className="date-picker">
          <label>
            Dia:
            <input
              type="number"
              value={selectedDate.day}
              onChange={(e) => {
                const value = Math.min(31, Math.max(1, e.target.value));
                setSelectedDate({ ...selectedDate, day: value });
              }}
              min="1"
              max="31"
              placeholder="DD"
            />
          </label>
          <label>
            Mês:
            <input
              type="number"
              value={selectedDate.month}
              onChange={(e) => {
                const value = Math.min(12, Math.max(1, e.target.value));
                setSelectedDate({ ...selectedDate, month: value });
              }}
              min="1"
              max="12"
              placeholder="MM"
            />
          </label>
          <label>
            Ano:
            <input
              type="number"
              value={selectedDate.year}
              onChange={(e) => setSelectedDate({ ...selectedDate, year: e.target.value })}
              placeholder="AAAA"
            />
          </label>
        </div>

        <div className="popup-buttons">
          <button onClick={handleConfirm}>Sim</button>
          <button onClick={onClose}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisitPopup;


