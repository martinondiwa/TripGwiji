import React from 'react'

function Hotels(trip) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
      <div>
        {trip?.tripData?.hotels?.map((item, index) => (
          <div key={index}>
            <img
              src="placeholder.JPG"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotels
