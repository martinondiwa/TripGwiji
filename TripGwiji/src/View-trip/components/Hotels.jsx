import React from 'react';

function Hotels({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {trip?.tripData?.hotels?.map((item, index) => (
          <div key={index}>
            <img 
              src='/placeholder.JPG' 
              alt={`Hotel ${index}`} 
              className='rounded-lg'
            />
            <div>
              <h2 className='my-3'>{hotel.hotelName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
