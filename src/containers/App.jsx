import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import ListVideos from "./ListVideos";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="notification">
          <ListVideos />  
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App;
