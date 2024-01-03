import React from "react";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">Hourly Forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
  Forecast

        
      </div>
    </div>
  );
}

export default Forecast;