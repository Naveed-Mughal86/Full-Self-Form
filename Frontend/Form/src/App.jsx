import { useState } from 'react'
import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Navigate to="/signup" />} />
    {/* <Route path='/' element={<Authform />}/> */}
    <Route path='/dashboard' element={localStorage.getItem('accessToken') ? <Dashboard /> : <Navigate to="/login" />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/forgot-password' element={<ForgotPassword />}/>
    <Route path='/reset-password' element={<ResetPassword />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App