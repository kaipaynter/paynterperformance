import React from 'react'
import logo from '../assets/images/logo_new.png'

const Header = (props) => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="Paynter Performance Logo" />
    </span>
    <h1>Welcome</h1>
    <h2 className="change">
      Elite Performance Coaching for Entertainers: Athletes, Artists, &
      Creatives.
    </h2>
  </header>
)

export default Header
