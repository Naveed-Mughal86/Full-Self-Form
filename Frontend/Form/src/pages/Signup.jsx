import { useState } from "react";
import Authform from "../components/Authform";
import { useNavigate } from "react-router";

export default function Signup(){
    const [feedback, setFeedback] = useState('')
    const navigate = useNavigate();

    const handleSignUp = async (email, password, name) => {
        setFeedback("Processing...");
        console.log("Sending data : ", {email, password, name});

        try {
            const response = await fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email:email, password:password, name:name})
            })
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || "Signup failed due to server error...")
            }

            if(data.session){
                localStorage.setItem('supabase_access_token', data.session.access_token)
                setFeedback("SignUp successful")
                navigate('/dashboard')
            }
            else{
                setFeedback("Success! Please check your email to confirm your account")
            }
        } catch (error) {
                setFeedback(`Error: ${error.message}`)
                console.error('Sign up error', error)
                return false;
        }
    }
    return <Authform type="signup"  onSubmit={handleSignUp}/>
}