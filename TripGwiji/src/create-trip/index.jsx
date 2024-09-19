import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { AI_PROMT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Button } from '@/components/ui/button';
import { Toast } from '@/components/ui/toast';
import { chatSession } from '@/service/AIModal';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData, // Corrected from 'formField' to 'formData'
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);


  const OnGenerateTrip = async () => {

    const User = localStorage.getItem('User');
    if (!user) {
      setOpenDailog(true)
      return;
    }

    if (formData?.noOfDays > 5 && !formData?.location || !formData?.budget || !formData?.people) {
      Toast.show("Please fill all details"); // Adjust this based on your Toast library's API
      return;
    }
    const FINAL_PROMPT = AI_PROMT
      .replace('{location}', formData?.location?.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget)

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text());
  }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-4 text-gray-500 text-xl'>
        Help us customize your trip by sharing a few details about your travel style. Whether you prefer adventure, relaxation, or cultural experiences, we’ve got something for you.
      </p>
      <div className='mt-20'>
        <h2 className='text-xl font-medium mb-3'>What is your destination of choice?</h2>
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}  // Fixed line
          selectProps={{
            place,
            onChange: (v) => { setPlace(v); handleInputChange('location', v) }
          }}
        />
      </div>

      <div className='mt-20'>
        <h2 className='font-bold text-3xl'>How many days are you planning your trip?</h2>
        <Input
          placeholder='Ex. 3'
          type="number"
          className="transition duration-300 ease-in-out border-2 focus:border-blue-300"
          onChange={(e) => handleInputChange('noOfDays', e.target.value)}
        />
      </div>
      <div className='mt-20'>
        <h2 className='font-bold text-3xl'>What is your budget?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item, index) => (
            <div key={index}
              onClick={() => handleInputChange('budget', item.title)}
              className={`p-4 border rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer ${formData?.budget === item.title ? 'shadow-lg border-black' : ''}`}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-blue-500'>{item.desc}</h2>
            </div>
          ))
          }
        </div>
      </div>

      <div className='mt-20'>
        <h2 className='font-bold text-3xl'>Who are you planning to travel with?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
          {SelectTravelesList.map((item, index) => (
            <div key={index} onClick={() => handleInputChange('traveler', item.people)} className={`p-4 border rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer ${formData?.traveler === item.people ? 'shadow-lg border-black' : ''}`}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-blue-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='my-10 justify-end flex'>
        <Button className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out' onClick={OnGenerateTrip}>
          Generate Trip
        </Button>
      </div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            
            <DialogDescription>
              <img src="/logo.svg"/>
              <h2>Sign in with google</h2>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;