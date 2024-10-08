import React from 'react';
import { Button } from '../ui/button';
import '../../lib/utils';

function Header() {
  return (
    <>
      <div className='p-2 shadow-sm flex justify-between items-center px-5'>

        <div >
          <img src='/logo.svg' alt='Logo' /> {/* Add alt attribute for accessibility */}
        </div>

        <div>
          <Button>Sign in Button</Button>
        </div>
      </div>
    </>
  );
}

export default Header;