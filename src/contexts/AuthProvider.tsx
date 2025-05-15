import { JSX, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/user";
import { loginUser, registerUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      await registerUser(name, email, password, () => {}); 

      const loginResponse = await loginUser(email, password);
      setUser({
        uid: loginResponse.uid,
        email: loginResponse.email!,
        name,
        token: loginResponse.token,
      });

      navigate("/dashboard");
      return true;
    } catch (error) {
      console.error("Erro ao registrar:", error);
      return false;
    }
  };

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
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
