import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Private = () => {

  const token = localStorage.getItem("token")
  return token ? (
    <div>
        <Header />
        <Outlet />

    </div>
  ) : <Navigate to='/'/>
}

export default Private