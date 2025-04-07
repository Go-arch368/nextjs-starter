import React from 'react'

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-10 px-6'>
      <div className='logo font-bold text-xl'>Clerk-Template</div>
      <ul className='flex gap-4 '>
         <li>Home</li>
         <li>About</li>
         <li>Services</li>
         <li>Contact Us</li>
      </ul> 
       <SignedOut>
        <SignInButton>
          <button className='bg-green-700 px-3 py-2 rounded-md'>Sign In</button>
        </SignInButton>
           
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </div>
  )
}

export default Navbar
