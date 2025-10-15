import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './templates/Home'
import { Login } from './templates/Login'
import { Signup } from './templates/Signup'
function App() {

  return (
    
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </>
  )
}

export default App
