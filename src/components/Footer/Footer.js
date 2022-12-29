import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  const linkToPage = (page) => {
    if (page === 'linkedin') {
      window.open(
        'https://www.linkedin.com/in/juha-anttila/',
        '_blank',
        'noopener, noreferrer'
      )
    } else if (page === 'github') {
      window.open(
        'https://github.com/juh3',
        '_blank',
        'noopener, noreferrer'
      )
    }
  }

  return (
    <div className="footer__container">
      <div className="left">
        <p>Made by Juha Anttila</p>
      </div>
      <div className="center">
        <a href="/login">Login</a>
      </div>

      <div className="right">
        <IconButton onClick={() => linkToPage('linkedin')}>
          <LinkedInIcon />
        </IconButton>
        <IconButton onClick={() => linkToPage('github')}>
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Footer
