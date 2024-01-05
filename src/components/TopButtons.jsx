import React from "react";

function TopButtons({ setQuery }) {
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
    alert(`You selected ${city.title}`);
  };

  return (
    <div className="flex items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-sm font-medium text-white"
          onClick={() => handleButtonClick(city)}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
