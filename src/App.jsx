import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Hero from './component/Hero'
import { Property } from './page/Property/Property'
import { Partner } from './page/Property/Partner'
import Footer from './component/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element=<Hero/>/>
    <Route path='/rental-manager' element= <Property/>/>
    <Route path='/become-partner' element=<Partner/>/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
