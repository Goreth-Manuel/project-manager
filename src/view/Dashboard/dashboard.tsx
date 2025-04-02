
import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";


const Dasboard = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Login com:", { email, password });
    };
  
  return (
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg">
        <Typography variant="h4" color="blue-gray" className="mb-4 text-center">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="email"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" color="blue" fullWidth>
            Entrar
          </Button>
          <Typography className="mt-4 text-center text-sm text-gray-600">
            <a href="#" className="text-blue-500 hover:underline">
              Esqueceu a senha?
            </a>
          </Typography>
          <Typography className="mt-2 text-center text-sm text-gray-600">
            Não tem uma conta?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Cadastre-se
            </a>
          </Typography>
        </form>
      </Card>
    </div>
    
    </>
  );
};

export default Dasboard;
