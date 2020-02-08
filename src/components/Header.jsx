import React from 'react'
import logo from '../assets/static/logo.svg';

const Header = () => {
  return (
    <header>
      <section className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile">
              <div className="column">
                <p className="title">React video app </p>
                <p className="subtitle">App to search video from api</p>
              </div>
              <div className="is-4 is-offset-8">
                <img src={logo} alt="" className="image is-96x96"/>
              </div>
            </div>

          </div>
        </div>
      </section>
    </header>
  )
}

export default Header;
