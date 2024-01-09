import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ units, setQuery }) {
  const [city, setCity] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(units);

  const handleSearchClick = () => {
    if (city.trim() !== "") {
      setQuery({ city, unit: selectedUnit });
    }
  };
  
  
  const handleUnitsChange = (e) => {
    const newUnit = e.currentTarget.name;
    if (selectedUnit !== newUnit) {
      setSelectedUnit(newUnit);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching user's location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
      });
    }
  };

  return (
    <div className="md:text-lg lg:text-xl xl:text-xl flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-blue-400 font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className={`text-white font-light transition ease-out hover:scale-125 ${
            selectedUnit === "metric" ? "font-bold" : ""
          }`}
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-white mx-1">|</p>
        <button
          name="imperial"
          className={`text-white font-light transition ease-out hover:scale-125 ${
            selectedUnit === "imperial" ? "font-bold" : ""
          }`}
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;