import React, { useState, useEffect } from 'react';
import { formData } from './Data';
import "./App.css"
import Login from './components/Login/Login';
import Data from './Data';

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
        <br /><br />
        <h1 style={{ color: 'greenyellow', textAlign: "center" }}>سلام داداش :)، ورود با موفقیت انجام شد</h1>
      </div>
    </>
  )
}
