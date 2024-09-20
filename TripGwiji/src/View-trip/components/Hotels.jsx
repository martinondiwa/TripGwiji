import React from 'react'

function Hotels(trip) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
      <div>
       {trip?.tripData?.htels?.map((item,index)=>(
        
       ))}
      </div>
    </div>
  )
}

export default Hotels
