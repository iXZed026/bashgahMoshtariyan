import React, { useState, useEffect } from 'react';
import "./App.css"
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import NavRight from './components/NavRight/NavRight';
import NavLeft from './components/NavLeft/NavLeft';
import Data from './Data';
import { Routes,Route } from 'react-router-dom';

export default function App() {
  let { loginData } = Data;

  const [login, setLogin] = useState(loginData);

  // Check if the user is already logged in based on local storage
  if (login.allTrue) {
    localStorage.setItem("login", JSON.stringify(true));
    console.log(JSON.parse(localStorage.getItem("login")));
  }

  // Styles to conditionally render the Login component based on login status
  const myStyles = {
    display: JSON.parse(localStorage.getItem("login")) ? 'none' : 'initial'
  };

  return (
    <>
      <div style={myStyles}>
        <Login login={login} setLogin={setLogin} />
      </div>
      <div style={{ display: JSON.parse(localStorage.getItem("login")) ? 'initial' : 'none' }}>
        <div className="container">
          <div className="container-item1" style={{width:"4%"}}>
            <NavLeft />
          </div>
          <div className="container-item2" style={{width:"90%" }}>
            <Header style={{ width: '10px' }} />
            <Routes>
              <Route path='/Header/Header'  element={<Header/>}/>
              <Route path='/NavRight/NavRight'  element={<NavRight/>}/>
            </Routes>
          </div>
          <div className="container-item3" style={{width:"202px"}}>
            <NavRight />
          </div>
        </div>

      </div>
    </>
  )
}
