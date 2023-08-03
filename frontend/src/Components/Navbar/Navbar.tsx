import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import image from "../../Assets/leetcode.png"
import { Button } from '@mui/material'
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { auth } from "../../Firebase"
// import { signInWithEmailAndPassword } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem"
};

const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [value, setValue] = useState('Light Mode')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  interface inputValueType {
    name: string,
    email: string,
    password: string
  }

  const [inputdetails, setInputdetail] = useState<inputValueType>({
    name: "",
    email: "",
    password: ""
  })


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputdetail((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, inputdetails.email, inputdetails.password).then((usercredential) => {
      console.log(usercredential)
    }).catch((err) => {
      console.log(err)
    })
  };



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
    <>
      <div className='navbar-main-div'>
        <Link to={"/"}>
          <img src={image} alt="image" width={100} />
        </Link>
        <div className='navbar-button-div'>
          <Button variant="contained" onClick={handleToggle}>{value}</Button>
          <Button variant="contained" color="success" onClick={handleOpen}>
            Signup
          </Button>
        </div>
      </div>

      {/* Modal Code start from here For SignUP  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='navbar-modal-div' >
          <h1 style={{ color: 'black' }}>Leetcode Signup</h1>
          <TextField label="Name" variant="outlined" className='navbar-inputbox' name='name' value={inputdetails.name} onChange={handleChange} />
          <TextField label="Email" variant="outlined" className='navbar-inputbox' name='email' value={inputdetails.email} onChange={handleChange} />
          <TextField label="Password" variant="outlined" className='navbar-inputbox' type='password' name='password' value={inputdetails.password} onChange={handleChange} />
          <Button variant="contained" color="success" onClick={handleSubmit} >
            Signup
          </Button>
          <p>Already have a <strong>Account</strong></p>
        </Box>
      </Modal>

    </>
  )
}

export default Navbar