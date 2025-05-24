import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar";
import { ProjectCard } from "../../components/ProjectCard";
import { Chart } from "../../components/Chart";
import { P, H2, Content, Container } from "./style"



const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      
      <Content>
        <H2>Dashboard</H2>
        <P>Visão geral de todos os projetos e estatísticas</P>
        <ProjectCard />
        <Chart />
     </Content>
   </Container>
  );
};
export default Dashboard;
