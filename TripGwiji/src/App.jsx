import react, { useState } from 'react'; // Correct import
import './App.css';
import { Button } from './components/ui/button';
import Hero from './components/Hero'; // Make sure the path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero */}
      <Hero />
    </>
  );
}

export default App;