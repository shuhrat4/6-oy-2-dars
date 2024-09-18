import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import Empty from '../assets/images/empty.png';

function Header({ countries, setCountries }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    countryName: '',
    countryCapital: '',
    countryPopulation: '',
  });
  const [chosenImg, setChosenImg] = useState(Empty);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setChosenImg(URL.createObjectURL(file)); // Rasmni ko'rsatish
      setFormData((prevData) => ({ ...prevData, flag: file })); // Flag sifatida faylni saqlash
    }
  };

  function handleEdit(selectedCountry) {
    setFormData({
      id: selectedCountry.id,
      countryName: selectedCountry.name,
      countryCapital: selectedCountry.capital,
      countryPopulation: selectedCountry.population,
    });
    setChosenImg(selectedCountry.flag); // Rasmni ko'rsatish
    setIsOpenModal(true); // Modalni ochish
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.id) {
      // Mavjud davlatni yangilash
      setCountries((prevCountries) =>
        prevCountries.map((country) =>
          country.id === formData.id
            ? { ...country, name: formData.countryName, capital: formData.countryCapital, population: formData.countryPopulation, flag: chosenImg }
            : country
        )
      );
    } else {
      // Yangi davlat qo'shish
      const newCountry = {
        id: countries.length ? countries[countries.length - 1].id + 1 : 1,
        name: formData.countryName,
        capital: formData.countryCapital,
        population: formData.countryPopulation,
        flag: chosenImg,
      };

      setCountries((prevCountries) => [...prevCountries, newCountry]);
    }

    handleCancelBtnClick(); // Modalni yopish va formani tozalash
  }

  function handleCancelBtnClick() {
    setIsOpenModal(false);
    setChosenImg(Empty);
    setFormData({ id: null, countryName: '', countryCapital: '', countryPopulation: '' }); // Reset form data
  }

  return (
    <>
      <header className="shadow-lg p-4 flex pl-[65px] items-center justify-between">
        <a className="text-[40px] font-bold" href="/"> Where in the world? </a>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              handleCancelBtnClick(); // Modalni ochirishdan oldin formani tozalash
              setIsOpenModal(true);
            }}
            className="border-[1px] font-semibold text-[16px] border-black bg-white p-1 leading-[21px] mr-[45px]"
          >
            Add Country
          </button>
        </div>
      </header>

      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <label className="w-[49%]">
              <input
                onChange={handleFileChange}
                className="hidden"
                type="file"
                name="file"
              />
              <img src={chosenImg} width={'100%'} alt="Selected preview" />
            </label>
            <div className="w-[49%] space-y-4">
              <input
                className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500"
                placeholder="Enter country name"
                name="countryName"
                value={formData.countryName || ''}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500"
                placeholder="Enter country capital"
                name="countryCapital"
                value={formData.countryCapital || ''}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 rounded-md outline-none border-[1px] border-slate-500"
                placeholder="Enter country population"
                name="countryPopulation"
                value={formData.countryPopulation || ''}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button type="submit" title="Submit" extraStyle="mt-5 w-full text-center bg-green-600 text-white" />
          <Button type="button" title="Cancel" onClick={handleCancelBtnClick} extraStyle="mt-1 w-full text-center bg-red-600 text-white" />
        </form>
      </Modal>
    </>
  );
}

export default Header;
