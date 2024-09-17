import React from 'react'
import './App.css';
import { Button } from './components/ui/button';
import Hero from './components/custom/Hero';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='font-extrabold text-[50px] flex items-center mx-56 gap-9 text-center'>
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span> <br />
        <p className='font-extrabold text-[50px] text-center mt-6'>
          Plan your perfect getaway with our AI-powered trip planner, designed to tailor every detail of your journey to your unique preferences and needs.
        </p>
      </div>
      <Link to={'/CreateTrip'}>
        <Button>Get Started, It's Free</Button>
      </Link>
    </>
  );
}

export default App;