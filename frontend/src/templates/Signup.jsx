import { useContext, useState } from "react"
import { AuthDataContext } from "../context/AuthContext"
import axios from "axios";

export const Signup =() =>{

    let serverUrl = useContext(AuthDataContext);
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleInput =(e)=>{
        let {name,value} = e.target;
        setUser((prv)=>({...prv,[name]:value}))
    }
    const handleSubmit = async (e)=>{
        try{
            e.preventDefault();
            let result = await axios.post(serverUrl+"/api/auth/signup",user.name,user.email,user.password,{withCredentials:true});

        }
        catch(error){
            console.log(error);
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
                        <input type="text" name="name" placeholder="Enter Name" value={user.name} onChange={handleInput}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email" >Email</label>
                        <input type="email" name="email" placeholder="Enter Email" value={user.email} onChange={handleInput}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleInput}/>
                    </div>
                    <div className="input-group">
                        <button className="btn">Sign Up</button>
                    </div>
                </form>

            </div>
            
        </div>
    )
}