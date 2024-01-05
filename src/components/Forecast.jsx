import React from "react";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div className="md:text-lg lg:text-xl xl:text-xl">
      <div>
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