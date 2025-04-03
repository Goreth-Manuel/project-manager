import { useState } from "react"; // Importando o useState
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { P, H2, Form, Input, Button } from "./style"; // Importando os estilos necessários

const NewProject = () => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    members: "",
  }); // Estado para armazenar os dados do formulário

  // Função para atualizar o estado dos campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Função para lidar com a submissão do formulário
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário ou adicionar ao estado global
    console.log("Novo Projeto Adicionado:", form);
    setForm({ name: "", title: "", description: "", members: "" }); // Limpar o formulário após o envio
  };

  return (
    <>
      <main>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: "20px" }}>
            <H2>Novo Projeto</H2>
            <P>Adicione mais projetos à sua lista</P>

            {/* Formulário de Criação de Projeto */}
            <Form onSubmit={handleFormSubmit}>
              <div>
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Nome do Projeto"
                  required
                />
                <Input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleInputChange}
                  placeholder="Título do Projeto"
                  required
                />
                <Input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleInputChange}
                  placeholder="Descrição"
                  required
                />
                <Input
                  type="text"
                  name="members"
                  value={form.members}
                  onChange={handleInputChange}
                  placeholder="Membros Associados"
                  required
                />
              </div>
              <Button type="submit">Adicionar Projeto</Button>
            </Form>
          </main>
        </div>
      </main>
    </>
  );
};

export default NewProject;
