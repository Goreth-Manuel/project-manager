import { JSX, useState } from "react"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState();
    
    const signin = () => {
    }

    const signout = () => {
    }

    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}