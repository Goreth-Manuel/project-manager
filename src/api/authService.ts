import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Usuário", user);

    await updateProfile(user, {
      displayName: name,
    });
    await user.reload();

    // Salvar dados adicionais no Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      password: password,
      createdAt: new Date(),
    });

    toast.success("Cadastro realizado com sucesso!");
  } catch (error) {
    toast.error("Erro ao cadastrar: " + (error as Error).message);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredentialLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredentialLogin.user;
    await user.reload(); 

     // Buscar o nome diretamente do Firestore
    const docSnap = await getDoc(doc(db, "users", user.uid));
    const firestoreName = docSnap.exists() ? docSnap.data().name : null;

    console.log("Nome do usuário após login", firestoreName);

    return {
      uid: user.uid,
      name: firestoreName || user.displayName || "Usuário",
      email: user.email,
      token: await user.getIdToken(),
    };
    
    
  } catch (error: any) {
    throw new Error(error || "E-mail ou senha incorretos.");
  } 
};
