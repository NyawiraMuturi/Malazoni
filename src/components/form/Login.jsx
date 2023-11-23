import React, { useState } from 'react'
import PropTypes from 'prop-types'



const Login = ({setToken}) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()




  return (
    <div class='backgroundImg h-screen grid justify-items-center items-center'>
      <div class='text-white border-white border-solid border rounded-md space-y-3 p-5'>
        <p>Welcome to KINOMAN</p>
      <form>
        <div className='flex flex-col'>
          <label htmlFor="">Email Address</label>
          <input 
          type="text" 
          name="email" 
          placeholder='Email'
          onChange={e=> setEmail(e.target.value)} />
        </div>

        <div className=' flex flex-col'>
          <label htmlFor="">Password</label>
          <input
          type="password" 
          name="password"
          placeholder='Password'
          onChange={e=> setPassword(e.target.value)}  />
        </div>

        <button type='submit'>Login</button>

      </form>
      </div>

    </div>

  )
}



export default Login