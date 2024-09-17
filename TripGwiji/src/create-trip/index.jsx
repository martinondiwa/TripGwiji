import { Input } from '@/components/ui/input';
import { Expand } from 'lucide-react';
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'


function CreateTrip() {
  const [place, setPlace] = useState()
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences </h2>
      <p className='mt-4 text-gray-500 text-xl'>Help us customize your trip by sharing a few details about your travel style. Whether you prefer adventure, relaxation, or cultural experiences, we’ve got something for you. Your preferences will guide us in planning the perfect trip tailored just for you.</p>
      <div>
        <div className='mt-20'>
          <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
          <GooglePlacesAutocomplete apiKey={'import.meta.env.VITE_GOOGLE_PLACE_API_KEY'}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); console.log(v) }
            }}
          />
        </div>
        <div className='mt-20'>
          <h2 className='font-bold text-3xl'>How many Days are going to spend for your journey?</h2>
          <Input placeholder={'Ex.3'} type="number"/>
        </div>
      </div>

    </div>



  )
}

export default CreateTrip
