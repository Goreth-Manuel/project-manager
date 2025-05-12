import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../api/authService";

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email: string;
  password: string;
}

const useLoginModel = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({ email: "", password: "" });
  const navigate = useNavigate();

  const validate = (): boolean => {
    let valid = true;
    const newErrors: Errors = { email: "", password: "" };

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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const data = await loginUser(formData.email, formData.password);
      localStorage.setItem("token", data.token);
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erro ao fazer login: " + (error as Error).message);
    }
  };

  return { formData, errors, handleChange, handleSubmit };
};

export default useLoginModel;
