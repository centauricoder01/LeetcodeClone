import React from 'react'
import home from "../../Assets/home.webp"
import "./Home.css"
import { Button } from '@mui/material'

const Home = () => {

  return (
    <div className='main-home-div'>
      <div className='home-image-div'>
        <img src={home} alt="home" />
      </div>
      <div className='home-info-div'>
        <h1>A New Way to Learn
        </h1>
        <p>LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
        <Button variant="contained" color="success">
          Create Account
        </Button>
      </div>
    </div>
  )
}

export default Home