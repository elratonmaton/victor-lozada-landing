import React from 'react'
import Link from 'next/link'

const Nav = () => (
  
  <nav className="navbar-background background1">
    <div className="nav-wrapper">
      <Link href="/">
        <a className="brand-logo">VÍCTOR M.<br/>LOZADA A.</a>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a className="link-item active" href="/">SOBRE MÍ</a></li>
        <li><a className="link-item" href="/obras">OBRAS</a></li>
        <li><a className="link-item" href="/proyecto_actual">PROYECTO ACTUAL</a></li>
        <li><a className="link-item" href="#">MICRO-RELATOS</a></li>
        <li><a className="link-item" href="#">EN MEDIOS</a></li>
        <li><a className="link-item" href="/otros">OTROS</a></li>
      </ul>
    </div>
  </nav>
)

export default Nav
