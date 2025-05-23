import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    password: ""
  });

  const { register } = useContext(AuthContext)


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
      const success = await register(formData.name, formData.email, formData.password);
      if(!success) {
        toast.error("Erro ao registrar. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro inesperado no cadastro. Tente novamente.");
      console.error(error);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useRegisterModel;
