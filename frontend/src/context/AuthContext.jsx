import {createContext } from "react";

export const AuthDataContext = createContext();

export const AuthContext = ({children})=>{
    
    let serverUrl = " http://localhost:8000";

    return(
        <AuthDataContext.Provider value={serverUrl}>
            {children}
        </AuthDataContext.Provider>
    )

}