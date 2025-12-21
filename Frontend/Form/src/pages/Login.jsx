import Authform from "../components/Authform";

export default function Login(){

    return (
        <div>
            <Authform type='login' />
            <p>Don't have an account<a href="/signup">Sign Up here</a></p>
        </div>
    )
}