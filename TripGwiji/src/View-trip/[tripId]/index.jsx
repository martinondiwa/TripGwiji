import { toast } from '@/hooks/use-toast';
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoSection from '../components/infoSection';

function Viewtrip() {

  const {tripId}=useParams();
  const[trip,setTrip]=useState([]);
  useEffect(()=>{
    tripId&&GetTripData();
  },[tripId])
    
  /**
   * Used to get trip information from firebase 
   */

  const GetTripData=async()=>{
    const docRef=doc(db, 'AITrips',tripId);
    const docSnap=await getDoc(docRef);

    if (docSnap.exists()){
    console.log("Dodcument:",docSnap.data());
    setTrip(docSnap.data());
    }
    else{
      console.log("No Such Document");
      toast('No trip Found')
    }

  }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
     {/**Information Section */}
      <InfoSection trip={trip}/>
     {/** recomended Hotels*/}

      {/**Daily plan */}
      
       {/**Footer */}
    </div>
  )
}

export default Viewtrip
