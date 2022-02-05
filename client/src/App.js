import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
