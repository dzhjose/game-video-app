import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

import Creators from "../pages/Creators";
import CreatorsDetail from "../pages/Creators/Detail/DetailPage";
import Games from "../pages/Games";
import DetailGame from "../pages/Games/Detail/DetailGame";
import Home from "../pages/Home";
import ListCreators from "./ListCreators";

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <NavBar />

        <div className="container">
          <div className="notification">
            <Routes>

              <Route
                path="/"
                element={
                  <Home>
                    <div className="columns is-multiline">
                      <div className="column is-12">
                        <h2 className="subtitle">Games</h2>
                        <Games />
                      </div>

                      <hr />

                      <div className="column is-12">
                        <h2 className="subtitle">Creators</h2>
                        <ListCreators />
                      </div>
                    </div>
                  </Home>
                }
              />

              <Route path="/games" element={<Games />} />

              <Route path="/creators" element={<Creators />} />

              <Route
                path="/creators/detail/:id"
                element={<CreatorsDetail />}
              />

              <Route
                path="/games/detail/:id"
                element={<DetailGame />}
              />

            </Routes>
          </div>
        </div>

        <Footer />
      </>
    </Router>
  );
};

export default App;
