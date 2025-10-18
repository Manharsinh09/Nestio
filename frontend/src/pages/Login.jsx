import { useContext, useState } from "react"
import { AuthDataContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Login =() =>{

    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");
    const serverUrl = useContext(AuthDataContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        try{
            
            e.preventDefault();
            let result = await axios.post(serverUrl+"/api/auth/login",{email,password},{withCredentials:true});
            console.log("Login succesfully "+email,password);
            console.log("Login result: "+result);
            navigate("/");
        }
        catch(error){
            console.log("Login error "+error);
        }
    }
    return(
        <div className="signup-wraper center">
            <div className="signup-container center">
                <div className="signup-header center">
                    <h3>LOGIN</h3>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email" >Email</label>
                        <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter Password"value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <button className="btn">Login</button>
                    </div>
                </form>

            </div>
            
        </div>
    )
}