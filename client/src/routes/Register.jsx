import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const Register = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-80px)]'>
    <SignUp signInUrl='/login'/>
  </div>
  )
}

export default Register