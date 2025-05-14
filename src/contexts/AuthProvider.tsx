import { JSX, useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../types/user";
import { loginUser } from "../api/authService";

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>();
    
    const signin = async (email: string, password: string): Promise<boolean> => {
        try {
            const loginResponse = await loginUser(email, password);
            setUser({
              uid: loginResponse.uid,
              email: loginResponse.email!,
              name: "", 
              token: loginResponse.token,
            });
            return true;
          } catch (error) {
            console.error("Erro ao fazer login:", error);
            return false;
          }
    }

    const signout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}