import React from 'react';
import { LuMapPin } from "react-icons/lu";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <div key={index}>
            <img 
              src={`/placeholder.JPG`} // Replace with the actual image URL
              alt={`Hotel ${hotel.hotelName}`} 
              className='rounded-lg'
            />
            <div>
              <h2 className='font-medium'>{hotel.hotelName}</h2>
              <h2 className='text-xs text-gray-500'><LuMapPin />{hotel.hotelName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;