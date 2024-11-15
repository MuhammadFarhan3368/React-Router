import React from 'react'
import Header from '../Componenets/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Componenets/Footer/Footer'

export default function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
