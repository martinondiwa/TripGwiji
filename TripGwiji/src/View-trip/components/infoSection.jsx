import React from 'react'

function InfoSection({trip}) {
  return (
    <div>
      <img src='/placeholder.JPG' className='h-[300px] w-full object-cover rounded-xl'/>
      <div className=''>
        <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
      </div>
      <div>
       <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-400'>{trip.userSelection?.noOfDays}Days</h2>
      </div>
    </div>
  )
}

export default InfoSection
