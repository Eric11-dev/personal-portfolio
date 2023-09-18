import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <LinkedInIcon />
            <GitHubIcon />
        </div>
        <div> <p>&copy; 2023 erichuang11.com</p></div>
    </div>
  )
}

export default Footer