import { useNavigate } from "react-router-dom";
import Authform from "../components/Authform";

export default function Login(){

    const navigate = useNavigate();
    const handleSignIn = async (email, password) => {

            const response = await fetch('http://localhost:3000/auth/signin',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({email: email, password: password})
            });
            const data = await response.json();

             if(response.ok && data.accessToken){
            localStorage.removeItem('accessToken')
            localStorage.removeItem('currentUser')

            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('currentUser', JSON.stringify(data.user))

            alert("Login Successful!")
            navigate('/dashboard',{replace:true});
            } else {
            alert(data.message || "Login Failed");
        }
       
            
    }
    

    return (
        <div>
            <Authform type='login' onSubmit={handleSignIn}/>
        </div>
    )
}