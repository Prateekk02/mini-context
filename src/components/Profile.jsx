import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext);
    if(!user){
        return <>Please Login!!!</>
    }
    return<>
        <h1>Welcome {user.username}  </h1>
    </>
}

export default Profile; 