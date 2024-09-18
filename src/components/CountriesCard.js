import React from 'react';

const CountriesCard = ({ item, onEdit, onDelete }) => {
  return (
    <li className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <img src={item.flag} alt={`${item.name} flag`} className="w-24 h-16 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{item.name}</h2>
      <p className="text-gray-500">Capital: {item.capital}</p>
      <p className="text-gray-500">Population: {item.population}</p>
      
      <div className="flex mt-4">
      <button onClick={() => onEdit(item)} className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-600 transition duration-200">Update</button>

        <button onClick={() => onDelete(item.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200" >Delete </button>
      </div>
    </li>
  );
};

export default CountriesCard;
