import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar";
import { ProjectCard } from "../../components/ProjectCard";
import { Chart } from "../../components/Chart";
import { P, H2 } from "./style"



const Dashboard = () => {
  return(
    <>
    <main>
    <Header />
    <div style={{display: "flex"}}>
    <Sidebar />
      <main style={{ flexGrow: 1, padding: "20px" }}>
        <H2>Página inicial</H2>
        <P>Visão geral de todos os projetos e estatísticas</P>
        <ProjectCard />
        <Chart />
      </main>
    </div>
    </main>
    </>
  )
}

export default Dashboard;