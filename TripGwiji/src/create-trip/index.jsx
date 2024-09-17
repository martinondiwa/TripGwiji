import { Input } from '@/components/ui/input';
import { Expand } from 'lucide-react';
import React, { useState } from 'react';
import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Button } from '@/components/ui/button';


function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData,setFormData]=useState([]);
  const handleInputChange=(name,value)=>{

  }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-4 text-gray-500 text-xl'>Help us customize your trip by sharing a few details about your travel style. Whether you prefer adventure, relaxation, or cultural experiences, we’ve got something for you. Your preferences will guide us in planning the perfect trip tailored just for you.</p>
      <div>
        <div className='mt-20'>
          <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
          <GooglePlacesAutocomplete apiKey={'import.meta.env.VITE_GOOGLE_PLACE_API_KEY'}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); handleInputChange('location,v') }
            }}
          />
        </div>
        <div className='mt-20 flex flex-col gap-10'>
          <h2 className='font-bold text-3xl'>How many Days are you planning your Trip?</h2>
          <Input placeholder={'Ex.3'} type="number" />
        </div>
      </div>

      <div>
        <h2 className='font-bold text-3xl'>What is you Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item, index) => (
            <div key={index} className='p-4 border rounded-lg hover:shadow-lg cursor-pointer'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-blue-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>


      <div>
        <h2 className='font-bold text-3xl'>Who are you planning to travel with?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelesList.map((item, index) => (
            <div key={index} className='p-4 border rounded-lg hover:shadow-lg cursor-pointer'>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-blue-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='my-10 justify-end flex'>
      <Button>Generate Trip</Button> 
      </div>
    </div>

  )
}

export default CreateTrip
