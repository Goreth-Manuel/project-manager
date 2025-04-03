import { createServer, Response } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.post("/register", (schema, request) => {
        const { name, email, password } = JSON.parse(request.requestBody);

        if (!name || !email || !password) {
          return new Response(400, {}, { error: "Todos os campos são obrigatórios!" });
        }

        return new Response(201, {}, {
          message: "Usuário cadastrado com sucesso!",
          user: {
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
          },
        });
      });

      this.post("/login", (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);

        if (email === "admin@gmail.com" && password === "123456") {
          return new Response(200, {}, {
            message: "Login bem-sucedido!",
            token: "fake-jwt-token",
            user: { id: "1", email: email, name: "Admin" },
          });
        }

        return new Response(401, {}, { error: "E-mail ou senha inválidos!" });
      });
    },
  });
}
