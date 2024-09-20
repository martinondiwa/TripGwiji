import React from 'react'

function Hotels(trip) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {trip?.tripData?.hotels?.map((item, index)=>(
          <div>
            <img src='/TripGwiji/public/hotelplaceholder.JPG'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotels
