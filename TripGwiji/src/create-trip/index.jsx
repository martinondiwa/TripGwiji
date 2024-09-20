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
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigation } from 'react-router-dom';

function CreateTrip() {
  const [place, setPlace] = useState(null); // Initialized to null
  const [formData, setFormData] = useState({}); // Initialized to an empty object
  const [openDailog, setOpenDailog] = useState(false);
  const [loading, setLoading] = useState(false);
  const router=useNavigation();
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log(codeResp);
      GetUserProfile(codeResp);  // Fetch user profile after login success
      setOpenDailog(false); // Close dialog after successful login
    },
    onError: (error) => console.log(error),
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem('User');
    if (!user) {
      setOpenDailog(true);
      return;
    }

    if (formData?.noOfDays > 5 && (!formData?.location || !formData?.budget || !formData?.traveler)) {
      Toast.show("Please fill all details");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMT
      .replace('{location}', formData?.location?.label || 'Unknown')
      .replace('{totalDays}', formData?.noOfDays || 'Unknown')
      .replace('{traveler}', formData?.traveler || 'Unknown')
      .replace('{budget}', formData?.budget || 'Unknown');

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log("__", result?.response?.text());
    setLoading(false);
    saveAiTrip(result?.response?.text())
  };

  const saveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('User'));
    const docId = Date.now().toString();

    try {
      // Make sure you use setDoc directly
      await setDoc(doc(db, "AITrips", docId), {
        userSelection: formData,
        tripData: JSON.parse(TripData), // Make sure TripData is valid JSON
        userEmail: user?.email,
        id: docId
      });
      console.log('Trip data saved successfully.');
    } catch (error) {
      console.error("Error saving trip data: ", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchTripData = async () => {
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      let tripData;

      // Assuming result is a response with text
      tripData = await result.response.text();

      console.log("__", tripData);
      // Proceed with further processing
    } catch (error) {
      console.error('Error fetching trip data:', error);
    }
  };

  // Call the async function where needed
  fetchTripData();




  const GetUserProfile = (tokenInfo) => {
    if (!tokenInfo || !tokenInfo.access_token) {
      console.error("Invalid token info");
      return;
    }

    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo.access_token}`,
        Accept: 'application/json'
      }
    })
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem('User', JSON.stringify(resp.data));  // Store user info in localStorage
        setOpenDailog(false);
        OnGenerateTrip();
      })
      .catch((error) => {
        console.error("Error fetching user profile", error);
      });
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-4 text-gray-500 text-xl'>
        Help us customize your trip by sharing a few details about your travel style. Whether you prefer adventure, relaxation, or cultural experiences, we’ve got something for you.
      </p>

      <div className='mt-20'>
        <h2 className='text-xl font-medium mb-3'>What is your destination of choice?</h2>
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
            place,
            onChange: (v) => { setPlace(v); handleInputChange('location', v); }
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

      <div>
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
            ))}
          </div>
        </div>

        <div className='mt-20'>
          <h2 className='font-bold text-3xl'>Who are you planning to travel with?</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('traveler', item.people)}
                className={`p-4 border rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer ${formData?.traveler === item.people ? 'shadow-lg border-black' : ''}`}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-blue-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className='my-10 justify-end flex'>
          <Button
            disabled={loading}
            className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out' onClick={OnGenerateTrip}>
            {
              loading ?
                <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : 'Generate Trip'
            }

          </Button>
        </div>

        <Dialog open={openDailog} onOpenChange={setOpenDailog}>
          <DialogTrigger asChild>
            <Button
              disabled={loading}
              className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out'>
              Sign in
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <img src="/logo.svg" alt="Logo" />
                <h2 className="font-bold text-lg mt-7 text-lime-400">Sign in with Google</h2>
                <p>Sign in to the app with Google Authentication securely</p>
                <Button onClick={login} className="w-full mt-5 flex gap-4 items-center">

                  <FcGoogle className="h-7 w-7" />
                  Sign in with Google

                </Button>

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}

export default CreateTrip;
