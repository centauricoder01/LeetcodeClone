import React from 'react'
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <a href="https://github.com/centauricoder01" target="_blank"><AiFillGithub size={30} /></a>
                <a href="https://www.linkedin.com/in/rajendra01/" target="_blank"><AiFillLinkedin size={30} /></a>
                <a href="https://twitter.com/itsrpatel" target="_blank"><AiFillTwitterCircle size={30} /></a>
            </div>
            <p className="copyright">&copy; 2023 Your Website. All rights reserved.</p>
        </footer>
    )
}

export default Footer