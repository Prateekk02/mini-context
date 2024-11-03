import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault();

        // sending the username and password to the context. 
        setUser({
            username, 
            password
        })
    }
    return<>
        <div>
            <h2>Login</h2>
            <label >Username</label>
            <input 
                type="text"
                value={username}
                onChange={(e) =>{
                    setUsername(e.target.value);
                } } 
                placeholder="Username" />  


            <label >Password</label>
            <input type="password"
                   value={password}
                   onChange={e =>{
                        setPassword(e.target.value);
                   }}
                   placeholder="Password" /> 
            <button onClick={handleSubmit}>Submit</button>   
        </div>
    </>
}

export default Login;