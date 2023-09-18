import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi! I am Eric</h2>
        <div>
          <p>A softwarer developer loves to learn and create.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon /> 
        </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2>Back-end</h2>
            <span>Java Spring, PostgreSQL, MySQL, Cloud Firestore, MongoDB, Redis, Google Cloud platform</span>
          </li>
          <li className='item'>
            <h2>Front-end</h2>
            <span>ReactJS, HTML, CSS, NPM, MaterialUI</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Java, Kotlin, Python, JavaScript, TypeScript, C/C++</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home