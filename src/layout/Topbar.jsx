import React from 'react'
import { Button } from '../components/ui/Button'

const Topbar = () => {
  return (
    <div className='p-3 flex flex-row justify-between'>
        <div>
            Menu
        </div>

        <div>
            Search bar
        </div>

        <div>
            <Button 
            text="LOGIN"
            color="red"
            padding=".5rem"
            radius="30%"
            width="100%" />
        </div>
    </div>
  )
}

export default Topbar