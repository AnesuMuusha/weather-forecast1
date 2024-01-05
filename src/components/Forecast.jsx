import React from "react";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div>
      <div className="">
        <p className="">Hourly Forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between">
  Forecast

        
      </div>
    </div>
  );
}

export default Forecast;