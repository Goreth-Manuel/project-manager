import { createContext } from "react";
import { User } from "../types/user";
export interface AuthContextTypes {
    user: User;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextTypes>(null!);