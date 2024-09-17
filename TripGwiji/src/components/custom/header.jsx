import React from 'react';
import { Button } from '../ui/button';
import '../../lib/utils';  
import Hero from './Hero';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className='p-2 shadow-sm flex justify-between items-center px-5'>
        <img src='/logo.svg' alt='Logo' /> {/* Add alt attribute for accessibility */}
      </div>

      <Link> 
        <Button>Sign in Button</Button>
        </Link>
    </>
  );
}

export default Header;