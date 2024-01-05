import React from "react";

function TemperatureAndDetails(){
  return (
    <div className="md:text-lg lg:text-xl xl:text-xl md:text-red-600 lg:text-red-600 xl:text-red-600">
      <div className="flex items-center justify-center py-6">
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">    
        <p>Image</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            Real fell:
            <span className="font-medium ml-1">feels_like°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            Humidity:
            <span className="font-medium ml-1">12%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            Wind:
            <span className="font-medium ml-1">3443 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            sunrise, timezone, hh:mm a
          </span>
        </p>
        <p className="font-light">|</p>

        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">sunset, timezone, "hh:mm a"      </span>
        </p>
        <p className="font-light">|</p>

        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">22°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;