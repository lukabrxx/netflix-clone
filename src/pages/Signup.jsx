import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from "../context/AuthContext"

const Signup = () => {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      await signUp(email,password)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
        <div className='w-full h-screen'>
            <img className=' w-full h-full hidden sm:block absolute object-cover' src="../images/bg.jpg" alt="netflix" />
            <div className='bg-black/60 fixed py-24 px-4 z-50 w-full '>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded-sm' type="email" placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded-sm' type="password" placeholder='Password' />

                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='flex justify-between items-center text-small text-gray-600'>
                    <p><input type="checkbox" className='mr-2' />Remember me</p>
                    <p>Need Help?</p>
                </div>
                <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix? </span> <Link to="/login">Sign In</Link></p>
            </form>    
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Signup