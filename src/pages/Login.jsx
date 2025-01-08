import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign up')
  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
  })

  const handleInputChange = (e)=> {
    const {name, value} = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));  
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    // user data
    console.log(user)
  }

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={handleFormSubmit}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340pxpx] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? " Create Account" : 'Login'}</p>
        <p>Please {state === 'Sign up' ? 'sign up' : 'log in'} to book appointment</p>
        {state === 'Sign up' ?
        <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 w-full rounded p-2 mt-1 outline-zinc-400' type="text" onChange={handleInputChange} value={user.name} required name='name' />
        </div>
        : ''}
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 w-full rounded p-2 mt-1 outline-zinc-400' type="email" onChange={handleInputChange} value={user.email} required name='email' />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 w-full rounded p-2 mt-1 outline-zinc-400' type="password" onChange={handleInputChange} value={user.password} required name='password' />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign up' ? 'Create Account' : 'Login'}</button>
        {
          state === 'Sign up' ? <p>Already have an account? <span onClick={()=> setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p> : <p>Create an new account? <span onClick={()=> setState('Sign up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login