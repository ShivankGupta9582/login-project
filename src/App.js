import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      {/* <switch>
        <BrowserRouter>
          <Routes>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Routes>
        </BrowserRouter>
      </switch> */}
      <h1>This is my home page</h1>
    </>
  )
}

export default App
