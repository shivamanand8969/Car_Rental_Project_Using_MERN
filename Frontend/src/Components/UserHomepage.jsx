import React from 'react'
import './UserHomePage.css'
import { Outlet } from 'react-router-dom'
import Navbar from './UserNav'
const UserHomepage = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default UserHomepage