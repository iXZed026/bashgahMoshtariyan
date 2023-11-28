import React, { useState, useEffect } from 'react'
import './Input.css'
import Datas from '../../Data';


export default function Input(props) {
  let { title, val, id, usersInformation, setUsersInformation } = props;

  function changeValueHandler(event) {

    if (id == 1) {
      setUsersInformation({
        ...usersInformation,
        nationalCode: event.target.value
      })
    }

    if (id == 2) {
      setUsersInformation({
        ...usersInformation,
        firstName: event.target.value
      })
    }

    if (id == 3) {
      setUsersInformation({
        ...usersInformation,
        telephoneNumber: event.target.value
      })
    }

    if (id == 4) {
      setUsersInformation({
        ...usersInformation,
        userName: event.target.value
      })
    }

    if (id == 5) {
      setUsersInformation({
        ...usersInformation,
        lastName: event.target.value
      })
    }

    if (id == 6) {
      setUsersInformation({
        ...usersInformation,
        password: event.target.value
      })
    }

  }


  return (
    <div className="user-information-input">
      <span>{title}</span><br></br>
      <input type="text" value={val} onChange={changeValueHandler} />
    </div>
  )
}
