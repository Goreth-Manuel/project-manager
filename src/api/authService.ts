import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { toast } from "react-toastify";


export const registerUser = async (
  name: string, 
  email: string, 
  password: string,
  navigate: (path: string) => void
) => {

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
      
          await updateProfile(user, {
            displayName: name
          });
  
            // Salvar dados adicionais no Firestore
            await setDoc(doc(db, "users", user.uid), {
              name: name,
              email: email,
              createdAt: new Date()
            });
     
        toast.success("Cadastro realizado com sucesso!");
        navigate("/dashboard");
      } catch (error) {
        toast.error("Erro ao cadastrar: " + (error as Error).message);
      }
    };
  
  
  export const loginUser = async (email: string, password: string) => {
    try {
      const userCredentialLogin = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentialLogin.user;

      return {
        uid: user.uid,
        email: user.email,
        token: await user.getIdToken()
      };
    } catch (error: any) {
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        throw new Error("E-mail ou senha incorretos.");
      } else {
        throw new Error(error.message);
      }
    }
  
   
  };
  
  