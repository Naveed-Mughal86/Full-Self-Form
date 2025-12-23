import { useState } from "react";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault();

    const payLoad = {email: email}
   
    setMessage("Sending password reset email...", email)
    try{
    const response = await fetch('http://localhost:3000/auth/forgot-password',{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payLoad)
    });
    
    const data = await response.json();
    if(!response.ok){
      throw new Error(data.message || "Could not send reset link");
    }
    alert("Success! Please check your inbox")
    setEmail('')
  } catch(error){
    console.error('Password reset error', error)
    setMessage("If an account exists, a password reset email has been sent")
  }
  };

  return (
    <div className="flex justify-center items-center text-white min-h-screen bg-[url(/bg.jpg)] bg-no-repeat bg-cover bg-fixed bg-center">
      <form onSubmit={submit} 
      className="backdrop-blur-xs p-8 rounded-2xl shadow-md w-full max-w-sm">
      <div className="backdrop-blur-xs p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold font-serif text-center mb-6">
          Forgot Password
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded-md mb-4"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
        >
          Send Reset Link
        </button>
      </div>
      </form>
    </div>
  );
}
