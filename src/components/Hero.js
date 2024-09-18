import React, { useState } from 'react';
import CountriesCard from './CountriesCard';
import loading from '../assets/images/Bean Eater@1x-1.0s-200px-200px.svg';

function Hero({ countries, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null); // Default value as null

  function handleSearchCountry(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function handleSelectCountry(e) {
    setSelectedCountry(e.target.value ? Number(e.target.value) : null); // Convert to number or null
  }

  const filteredCountries = countries.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm);
    const matchesSelection = selectedCountry === null || item.id === selectedCountry;
    return matchesSearch && matchesSelection;
  });

  return (
    <main>
      <section className="bg-gray-100 min-h-screen p-10">
        <div className="mx-auto pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <input
            onChange={handleSearchCountry}
            type="text"
            placeholder="Search for a country..."
            className="w-full ml-5 lg:w-[480px] h-[56px] p-4 border-[1px] border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            onChange={handleSelectCountry}
            className="w-full lg:w-[200px] h-[56px] p-4 border-[1px] border-gray-400 mr-5 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Capitals</option>
            {countries.map((item) => (
              <option key={item.id} value={item.id}>
                {item.capital}
              </option>
            ))}
          </select>
        </div>
        <ul className="flex flex-wrap justify-center lg:justify-between gap-10 mt-10 p-5">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((item) => (
              <CountriesCard
                key={item.id}
                item={item}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <img src={loading} alt="Loading" className="w-[200px] h-[200px]" />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Hero;
