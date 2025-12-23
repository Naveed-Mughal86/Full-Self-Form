import { useState } from "react";

import {useNavigate} from 'react-router-dom';
import { supabase } from "../supabase/supabaseClient";



  
export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("Please enter your new password");
  const navigate = useNavigate();

  const submit = async (password) => {
  
    // e.preventDefault();
    setMessage("Processing...")

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if(password.length < 6) {
      setMessage("Password must be at least 6 characters")
      return;
    }
    try {
      const {error} = await supabase.auth.updateUser({
        password: password
      });
      if(error){
        throw new Error(error.message)
      }
      
      setMessage('Password reset successful. You can now log in...')
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (error) {
      console.error("Reset error", error);
      setMessage(`Failed to reset password.Error ${error.message} Please try again`)
    }

    // await api.post("/auth/reset-password", { password });
    // alert("Password reset successfully!");
  };

  return (
    <div className="flex justify-center items-center text-white min-h-screen bg-[url(/bg.jpg)] bg-no-repeat bg-cover bg-fixed bg-center">
      <form onSubmit={submit} className="backdrop-blur-xs p-8 rounded-2xl shadow-md w-full max-w-sm">
      <div className="backdrop-blur-xs p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center font-serif mb-6">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border rounded-md mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded-md mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Reset Password
        </button>
      </div>
      </form>
    </div>
  );
}
