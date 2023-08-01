import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import image from "../../Assets/leetcode.png"
import { Button } from '@mui/material'
import { Link } from "react-router-dom"



const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [value, setValue] = useState('Light Mode')

  useEffect(() => {
    const body = document.querySelector('body');
    if (body !== null) {
      body.style.backgroundColor = isDarkMode ? 'rgb(18 38 61)' : 'white';
      body.style.color = isDarkMode ? 'white' : 'black';
    }

    return () => {
      if (body !== null) {
        body.style.backgroundColor = '';
      }
    };

  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
    if (value === "Light Mode") {
      setValue("Dark Mode")
    }
    else {
      setValue("Light Mode")
    }
  };

  return (
    <div className='navbar-main-div'>
      <Link to={"/"}>
        <img src={image} alt="image" width={100} />
      </Link>
      <div className='navbar-button-div'>
        <Button variant="contained" onClick={handleToggle}>{value}</Button>
        <Button variant="contained" color="success">
          Signup
        </Button>
      </div>
    </div>
  )
}

export default Navbar