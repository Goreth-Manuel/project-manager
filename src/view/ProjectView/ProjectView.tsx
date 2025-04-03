import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { P, H2, Table, TableRow, TableHeader, TableData, IconContainer } from "./style";
import { FaEdit, FaTrashAlt, FaSyncAlt } from "react-icons/fa"; 

const projects = [
    { name: "Projeto 1", title: "Título do Projeto 1", description: "Descrição do projeto 1", members: "Membro A, Membro B" },
    { name: "Projeto 2", title: "Título do Projeto 2", description: "Descrição do projeto 2", members: "Membro C, Membro D" },
    { name: "Projeto 3", title: "Título do Projeto 3", description: "Descrição do projeto 3", members: "Membro E, Membro F" },
    { name: "Projeto 4", title: "Título do Projeto 4", description: "Descrição do projeto 3", members: "Membro E, Membro F" },
    { name: "Projeto 5", title: "Título do Projeto 5", description: "Descrição do projeto 3", members: "Membro E, Membro F" },
];

const Project = () => {
    return(
      <>
      <main>
      <Header />
      <div style={{display: "flex"}}>
      <Sidebar />
        <main style={{ flexGrow: 1, padding: "20px" }}>
            <H2>Meus Projectos</H2>
            <P>Visão geral de todos os projetos e estatísticas</P>
               
            <Table>
                            <thead>
                                <TableRow>
                                    <TableHeader>Nome</TableHeader>
                                    <TableHeader>Título</TableHeader>
                                    <TableHeader>Descrição</TableHeader>
                                    <TableHeader>Membros Associados</TableHeader>
                                    <TableHeader>Ações</TableHeader>
                                </TableRow>
                            </thead>
                            <tbody>
                                {projects.map((project, index) => (
                                    <TableRow key={index}>
                                        <TableData>{project.name}</TableData>
                                        <TableData>{project.title}</TableData>
                                        <TableData>{project.description}</TableData>
                                        <TableData>{project.members}</TableData>
                                        <TableData>
                                            <IconContainer>
                                                <FaEdit style={{ color: "blue", cursor: "pointer", marginRight: "10px" }} title="Editar" />
                                                <FaSyncAlt style={{ color: "orange", cursor: "pointer", marginRight: "10px" }} title="Atualizar" />
                                                <FaTrashAlt style={{ color: "red", cursor: "pointer" }} title="Apagar" />
                                            </IconContainer>
                                        </TableData>
                                    </TableRow>
                                ))}
                            </tbody>
                        </Table>
        </main>
      </div>
  
      </main>
      </>
    )
  }
  
  export default Project;