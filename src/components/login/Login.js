import { useRef, useState } from "react";

const users = [
    {
        "user": "pedro",
        "password": "somePass@",
    },
    {
        "user": "admin",
        "password": "pass123",
    },
    {
        "user": "tech89",
        "password": "starlight",
    }
]


function Login () {

    const userNameInput = useRef();
    const userPasswordInput = useRef();
    const [message, setMessage] = useState('')

    function authentication(){
        const username = userNameInput.current.value;
        const password = userPasswordInput.current.value;

        for(let access of users){
            if(access.user == username && access.password == password){
                setMessage('Login Successful');
                return;
            } 
        }

        setMessage('Incorrect Credencials')

    }
    

    return <>
        <fieldset>
        <legend>LOGIN</legend>
            <label>Username</label> <br/>
            <input type='text' ref={userNameInput}></input> <br/>
            <label>Password</label> <br/>
            <input type='password' ref={userPasswordInput}></input> <br/>
            <button onClick={authentication}>Login</button> <br/>
            <span>{message}</span>
        </fieldset> 

        
    </>
}

export default Login