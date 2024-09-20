import React from 'react'

function InfoSection({trip}) {
    return (
        <div>
           <>
           <img src='/placeholder.JPG' className='h-[300px] w-full object-cover rounded-xl' />
           <div>
               <h2>{trip?.userSelection?.location?.label}</h2>
           </div>
           </>
        </div>
    )
}

export default InfoSection
