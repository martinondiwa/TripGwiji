import React from 'react'

function InfoSection({ trip }) {
    return (
        <div >
            <img src='/placeholder.JPG' className='h-[300px] w-full object-cover rounded-xl' />
            <div className=''>
                <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
            </div>
            <div className='flex gap-5'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>🗓️{trip.userSelection?.noOfDays}Days</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>{trip.userSelection?.budget} Budget</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>No. Of Travelers:{trip.userSelection?.traveler}</h2>
            </div>
        </div>
    )
}

export default InfoSection
