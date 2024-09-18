import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const allCountries = [
    {
      id: 1,
      name: "Wallis and Futuna",
      capital: "Mata-Utu",
      population: 11750,
      flag: "https://flagcdn.com/wf.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 2,
      name: "Iceland",
      capital: "Reykjavik",
      population: 366425,
      flag: "https://flagcdn.com/is.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 3,
      name: "Luxembourg",
      capital: "Luxembourg",
      population: 632275,
      flag: "https://flagcdn.com/lu.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 4,
      name: "Mali",
      capital: "Bamako",
      population: 20250834,
      flag: "https://flagcdn.com/ml.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 5,
      name: "Comoros",
      capital: "Moroni",
      population: 869595,
      flag: "https://flagcdn.com/km.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 6,
      name: "Australia",
      capital: "Canberra",
      population: 25687041,
      flag: "https://flagcdn.com/au.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 7,
      name: "Estonia",
      capital: "Tallinn",
      population: 1331057,
      flag: "https://flagcdn.com/ee.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 8,
      name: "Philippines",
      capital: "Manila",
      population: 11363122,
      flag: "https://flagcdn.com/ph.svg",
      isLiked: false,
      isBasket: false
    },
  ];

  const [countries, setCountries] = useState(allCountries);

  const handleEdit = (country) => {
       console.log("Edit country:", country);
  };

  const handleDelete = (id) => {
    setCountries(countries.filter(country => country.id !== id));
  };

  return (
    <div className="App">
      <Header countries={countries} setCountries={setCountries} />
      <Hero countries={countries} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
