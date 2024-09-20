import { db } from '@/service/firebaseConfig';
import { doc } from 'firebase/firestore';
import React from 'react'
import { useParams } from 'react-router-dom'

function Viewtrip() {

  const {tripId}=useParams();
  const GetTripData=()=>{
    const docRef=doc(db, 'AITrips',tripId);
  }

  return (
    <div>
      Viewtrip: {tripId}
    </div>
  )
}

export default Viewtrip
