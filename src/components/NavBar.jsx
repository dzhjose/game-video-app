import React, { useState, useEffect } from 'react'
import {Link}from "react-router-dom";

const NavBar = () => {
  const [isActive, set_isActive] = useState(false);

  useEffect(() => {
    const updateCollapse = () => {
      if(window.innerWidth < 1024){
        return set_isActive(false);
      }
    }

    window.addEventListener('resize', updateCollapse);
  }, [])
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="title is-white-text">GAME OVER</h1>
        </a>
        <div className="navbar-burger burger" data-target="navbarDark" onClick={() => {set_isActive(!isActive)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarDark" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link  to="/" className="navbar-item" onClick={() => {set_isActive(!isActive)}}>
            Home
          </Link>
          <Link  to="/games" className="navbar-item" onClick={() => {set_isActive(!isActive)}}>
            Games
          </Link>
          <Link  to="/creators" className="navbar-item" onClick={() => {set_isActive(!isActive)}}>
            Creators
          </Link>
          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
              Docs
            </a>
            <div className="navbar-dropdown is-boxed is-right">
              <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                Overview
              </a>
              <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a className="navbar-item " href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
