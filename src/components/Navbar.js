import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [expendNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

  return (
    <div className='navbar' id={expendNavbar ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                <ReorderIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to= "/experience"> Experience </Link>
            <Link to= "/projects"> Projects </Link>
            <Link to= "/More"> More </Link>
        </div>
    </div>
  )
}

export default Navbar