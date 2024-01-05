import React, { useState } from "react";
import Weather from "./Weather";

function TopButtons() {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Cape Town",
    },
  ];

  const handleButtonClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className=''>
    
    <div className="md:text-lg lg:text-xl xl:text-xl flex  items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="md:text-lg lg:text-xl xl:text-xl text-sm font-medium text-white"
          onClick={() => handleButtonClick(city)}
        >
          {city.title}
        </button>
      ))}
      {selectedCity && <Weather city={selectedCity} />}
    </div>
    </div>
  );
}

export default TopButtons;
