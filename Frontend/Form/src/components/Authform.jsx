import { useState } from "react"
import {Link} from 'react-router-dom'

export default function Authform({type, onSubmit}){

        const isLogin = type === 'login';
        const isSignup = type === 'signup'
        
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();
            // onSubmit({name, email, password, confirmPassword})
        }

        

    return <>
        <div className="flex items-center justify-center bg-[url(/bg.jpg)] bg-no-repeat bg-center bg-cover bg-fixed">
            <div className="flex items-center justify-center m-35 ">
            <form onSubmit={handleSubmit} className="w-full h-100 p-13 flex flex-col items-center justify-center text-sky-50  rounded backdrop-blur-xs overflow-hidden">
                <h1 className="text-2xl text-center font-serif mb-5">{isLogin ? "Login" : "Create Account"}</h1>
                {!isLogin && <div className="flex flex-col items-center justify-center w-full">
                    <label htmlFor="" className="font-serif w-full mb-1">Full Name</label>
                    <input 
                    className="border rounded p-1 w-100 mb-1"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    placeholder="Enter Your Name" 
                    onChange={(e) => setName(e.target.value)}
                    required

                    />
                </div>}

                <div className="flex flex-col items-center justify-center w-full">
                    <label htmlFor="" className="font-serif w-full mb-1">Email</label>
                    <input 
                    className="border rounded p-1 w-100 mb-1"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required={isLogin}

                    />
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <label htmlFor="" className="font-serif w-full mb-1">Password</label>
                    <input 
                    className="border rounded p-1 w-100 mb-1"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Enter Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required={isLogin}

                    />
                </div>

                

                {!isLogin && <div className="flex flex-col items-center justify-center w-full">
                    <label htmlFor="" className="font-serif w-full mb-1">Confirm Password</label>
                    <input 
                    className="border rounded p-1 w-100 mb-2"
                    type="password"
                    name="confirm password"
                    id="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required

                    />
                </div>}

                <button type="submit" className="bg-blue-600 w-full rounded m-2 p-2 hover:bg-blue-700 hover:cursor-pointer">{isLogin ? "Log In" : "Sign Up"}</button>
                {isSignup && <p>Already have an account? <Link className="text-blue-900" to='/login'>Login</Link></p>}
                {isLogin && <p>Don't have an account? <Link className="text-blue-900" to='/signup'>Register</Link></p>}
            </form>
            </div>
        </div>
    </>
}