import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Location() {
  const [userLocation, setUserLocation] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          getCityAndCountry(latitude, longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const getCityAndCountry = async (latitude, longitude) => {
    try {
      const apiKey = 'YOUR_OPENCAGE_API_KEY';
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`
      );

      console.log('OpenCage API Response:', response.data); // Add this line for debugging

      const result = response.data.results[0];
      if (result) {
        const city = result.components.city || result.components.town;
        const country = result.components.country;
        setLocationDetails({ city, country });
      } else {
        console.warn('No results found.');
      }
    } catch (error) {
      console.error('Error getting city and country:', error);
    }
  };

  useEffect(() => {
    }, []);

  return (
    <div className="flex items-center justify-center py-2 text-white">
      
      <button onClick={getUserLocation}>User Location</button>
      {userLocation && (
        <div className="flex items-center justify-center py-4 ">
          <p >: Latitude: {userLocation.latitude}</p>
          <p >: Longitude: {userLocation.longitude}</p>
        </div>
      )}
      {locationDetails && (
        <div className='md:text-lg lg:text-xl xl:text-xl'>
          <h2>Location Details</h2>
          <p>City: {locationDetails.city}</p>
          <p>Country: {locationDetails.country}</p>
        </div>
      )}
    </div>
  );
}

export default Location;