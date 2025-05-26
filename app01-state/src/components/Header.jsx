import React from 'react'
import logo from '../images/logo.png'
import './Header.css'

export default function Header({title}) {
  return (
    <nav>
        <img src={logo} className='logo' />
        <a href="/">{title}</a>
    </nav>
  )
}
