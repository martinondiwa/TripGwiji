import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <>
      <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src='/logo.svg' />
      </div>

      <div>
        <Button>Sign in Button</Button>
      </div>
    </>
  )
}

export default Header
