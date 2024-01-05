import React from "react";

function ForecastDaily({ title, items }) {
  console.log(items);
  return (
    <div className="md:text-lg lg:text-xl xl:text-xl lg:text-red-600 xl:text-red-600">
      <div className="flex items-center justify-start mt-2">
        <p className="text-white font-medium ">Daily Forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
  Forecast

        
      </div>
    </div>
  );
}

export default ForecastDaily;