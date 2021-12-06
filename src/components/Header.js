import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Header = (props) => (
  <header id="header" className="alt">
    <span className="logo">
      <StaticImage
        src="../assets/images/logo_new.png"
        alt="Logo"
        placeholder="blurred"
        objectFit="contain"
      />
    </span>
    <h1 className="change">Welcome</h1>
    <h2 className="change">
      <strong>
        Elite Performance Coaching for Entertainers: Athletes, Artists, &
        Creatives.
      </strong>
    </h2>
  </header>
)

export default Header
