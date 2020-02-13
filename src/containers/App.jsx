import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ListCreators from "./ListCreators";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Games from '../pages/Games'
import CreatorsDetail from "../pages/Creators/Detail/DetailPage";
import Creators from "../pages/Creators";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <NavBar />
        <div className="container">
          <div className="notification">
            <Switch>
              <Route exact path="/">
                <Home>
                  <ListCreators />
                </Home>
              </Route>
              <Route exact path="/games">
                <Games />
              </Route>
              <Route exact path="/creators">
                <Creators />
              </Route>
              <Route exact path="/creators/detail/:id">
                <CreatorsDetail />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    </Router>
  )
}

export default App;
