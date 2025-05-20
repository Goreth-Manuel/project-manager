import { JSX, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/user";
import { loginUser, registerUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

// Funções auxiliares fora do componente
const saveUserToLocalStorage = (user: User) => {
  localStorage.setItem("authUser", JSON.stringify(user));
};

const loadUserFromLocalStorage = (): User | null => {
  const storedUser = localStorage.getItem("authUser");
  return storedUser ? JSON.parse(storedUser) : null;
};

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(() => loadUserFromLocalStorage());
  const navigate = useNavigate();

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      await registerUser(name, email, password);

      const loginResponse = await loginUser(email, password);

      const newUser: User = {
        uid: loginResponse.uid,
        email: loginResponse.email!,
        name: loginResponse.name || name,
        token: loginResponse.token,
      };

      setUser(newUser);
      saveUserToLocalStorage(newUser);

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

      const newUser: User = {
        uid: loginResponse.uid,
        email: loginResponse.email!,
        name: loginResponse.name || "Usuário",
        token: loginResponse.token,
      };
      setUser(newUser);
      saveUserToLocalStorage(newUser);

      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, register, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
