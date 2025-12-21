import { useState } from 'react'
import './App.css'
import Authform from './components/Authform.jsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Authform />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/forgot-password' element={<ForgotPassword />}/>
    <Route path='/reset-password' element={<ResetPassword />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
