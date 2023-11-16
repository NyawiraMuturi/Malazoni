import React from 'react'

const login = () => {

  



  return (
    <div class='backgroundImg h-screen grid justify-items-center items-center'>
      <div class='text-white border-white border-solid border rounded-md space-y-3 p-5'>
        <p>Welcome to KINOMAN</p>
      <form action="">
        <div className='flex flex-col'>
          <label htmlFor="">Email Address</label>
          <input type="text" name="" id="" placeholder='Email' />
        </div>

        <div className=' flex flex-col'>
          <label htmlFor="">Password</label>
          <input type="text" name="" id="" placeholder='Password' />
        </div>

        <button type='submit'>Login</button>

      </form>
      </div>

    </div>

  )
}

export default login