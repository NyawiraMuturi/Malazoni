import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import { Button } from '../components/ui/Button'

const Topbar = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/login')


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
            onClick={handleClick}
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