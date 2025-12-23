import Authform from "../components/Authform";

export default function Login(){

    const handleSignIn = async (email, password) => {

            const response = await fetch('http://localhost:3000/auth/signin',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({email: email, password: password})
            });
            const data = await response.json();

             if(response.ok){
            localStorage.setItem('accessToken', data.session.access_token)
            alert("Login Successful!")
            navigate("/dashboard")
            } else {
            console.error(data.message);
        }
       
            
        }
    

    return (
        <div>
            <Authform type='login' onSubmit={handleSignIn}/>
        </div>
    )
}