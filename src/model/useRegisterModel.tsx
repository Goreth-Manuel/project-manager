import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
//import { registerUser } from "../api/authService";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface Errors {
  name: string;
  email: string;
  password: string;
}

const useRegisterModel = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const validate = (): boolean => {
    let valid = true;
    const newErrors: Errors = { name: "", email: "", password: "" };

    if (!formData.name) {
      newErrors.name = "O nome é obrigatório.";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "O e-mail é obrigatório.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido.";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "A senha é obrigatória.";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
       if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
    }
      toast.success("Cadastro realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erro ao cadastrar: " + (error as Error).message);
    }
  };
  return { formData, errors, handleChange, handleSubmit };
};

export default useRegisterModel;
