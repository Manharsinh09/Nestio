import { useContext, useState } from "react"
import { AuthDataContext } from "../context/AuthContext"
import axios from "axios";

export const Signup =() =>{

    let serverUrl = useContext(AuthDataContext);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    
    const handleSubmit = async (e)=>{

        try{
            e.preventDefault();
            let result = await axios.post(serverUrl+"/api/auth/signup",{name,email,password},{withCredentials:true});
            console.log("Signup succesfully "+name,email,password);
        }
        catch(error){
            console.log("Singup error "+error);
        }
    }
    return(
        <div className="signup-wraper center">
            <div className="signup-container center">
                <div className="signup-header center">
                    <h3>SIGN UP</h3>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email" >Email</label>
                        <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <button className="btn">Sign Up</button>
                    </div>
                </form>

            </div>
            
        </div>
    )
}