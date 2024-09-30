"use client"; 

import './style.css';
import { renderProperties, filterPropertiesByBedrooms } from './components/propertyUtils'; 
import { useState, useEffect } from 'react'; 
import ScheduleVisitPopup from './components/ScheduleVisitPopup'; 

const properties = [
  {
    image: '/img/casa2.jpg',
    name: 'Imóvel 1',
    price: 600000,
    bedrooms: 4,
    address: 'Rua A, 456',
  },
  {
    image: '/img/casa2.jpg',
    name: 'Imóvel 2',
    price: 350000,
    bedrooms: 2,
    address: 'Rua B, 789',
  },
  {
    image: '/img/casa2.jpg',
    name: 'Imóvel 3',
    price: 600000,
    bedrooms: 4,
    address: 'Rua C, 456',
  },
  {
    image: '/img/casa2.jpg',
    name: 'Imóvel 4',
    price: 350000,
    bedrooms: 2,
    address: 'Rua D, 789',
  },
  {
    image: '/img/casa2.jpg',
    name: 'Imóvel 5',
    price: 600000,
    bedrooms: 4,
    address: 'Rua E, 456',
  },
  {
    image: '/img/casa2.jpg',
    name: 'Imóvel 6',
    price: 350000,
    bedrooms: 2,
    address: 'Rua F, 789',
  },
];

export default function Home() {
  const [bedroomFilter, setBedroomFilter] = useState('all');
  const [filteredProperties, setFilteredProperties] = useState(properties); 
  const [counter, setCounter] = useState(0);
  const increment = 20; 
  const digitCount = 9; 
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [selectedProperty, setSelectedProperty] = useState(null);
  function updateCounter() {
    setCounter(prevCounter => prevCounter + increment);
  }

  useEffect(() => {
    const interval = setInterval(updateCounter, 5000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const result = filterPropertiesByBedrooms(properties, bedroomFilter);
    setFilteredProperties(result);
  }, [bedroomFilter]);


  const openPopup = (property) => {
    setSelectedProperty(property);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedProperty(null);
    setIsPopupOpen(false);
  };

  return (
    <>
      <nav className="head">
        <img src="/img/logo-removebg-preview.png" className="logo" alt="logo-imovel" />
        <div className="option julius-sans-one-regular">
          <li><a href="#teste">HOME</a></li>
          <li><a href="#teste">IMÓVEIS</a></li>
          <li><a href="#teste">SOBRE</a></li>
          <li><a href="#teste">CONTATO</a></li>
        </div>
      </nav>

      <h1 className="text">SÓ HOJE NOS JÁ CAPTURAMOS</h1>

      <div className="counter-container">
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[0]}</span></div>
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[1]}</span></div>
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[2]}</span></div>
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[3]}</span></div>
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[4]}</span></div>
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[5]}</span></div>
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[6]}</span></div>
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[7]}</span></div>
        <div className="digit"><span>{String(counter).padStart(digitCount, '0')[8]}</span></div>
      </div>

      <h1 className="text2">DE CARBONO EM GRAMAS</h1>

      <div className="line-container">
        <span className="line-text">SONHOS REALIZADOS<br />AQUI</span>
        <hr className="animated-line" />
      </div>

      <div className="banner">
        <img src="/img/Construction-pana.png" className="background-image" alt="Construção" />
        <h1 className="overlay-text">
          Descubra a diferença com a Imobiliária Carbono Zero! Em um mundo que busca cada vez mais práticas sustentáveis, nos destacamos por nosso compromisso com o meio ambiente. Ao escolher nossos serviços, você não apenas encontra a casa dos seus sonhos, mas também contribui para um futuro mais verde. A cada venda, convertendo parte do valor arrecadado em árvores plantadas, ajudamos a combater as mudanças climáticas e a preservar nosso planeta para as futuras gerações. Faça parte dessa transformação: compre, venda e plante com a Imobiliária Carbono Zero, onde seu investimento também planta o futuro.
        </h1>
      </div>

      <div className="line-container">
        <hr className="animated-line" />
      </div>

      <div className="filter">
        <label htmlFor="bedrooms-filter">Filtrar por número de quartos:</label>
        <select id="bedrooms-filter" onChange={(e) => setBedroomFilter(e.target.value)}>
          <option value="all">Todos</option>
          <option value="2">2 Quartos</option>
          <option value="4">4 Quartos</option>
        </select>
      </div>

      <div id="carousel-container">
      {renderProperties(filteredProperties, openPopup)} {/* Passando a função para abrir o pop-up */}
      </div>

      <div className="line-container1">
        <hr className="animated-line" />
      </div>

      {isPopupOpen && (
        <ScheduleVisitPopup property={selectedProperty} onClose={closePopup} />
      )}

      <footer className="footer">
        <div>
          <h1 className="slogan">Imobiliária Carbono Zero:<br />Conectando você ao futuro sustentável.</h1>
        </div>
        <div className="logo">
          <img src="/img/logo-removebg-preview.png" alt="Logo" />
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63333.855252723!2d-34.902712785006116!3d-7.1990211914871844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace810852ae4f1%3A0xaf5445223401f2bb!2sIFPB%20-%20Campus%20Jo%C3%A3o%20Pessoa!5e0!3m2!1spt-BR!2sbr!4v1699450182623!5m2!1spt-BR!2sbr"
            className="mapa" width="320" height="320" style={{ border: "5px" }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </footer>
    </>
  );
}
