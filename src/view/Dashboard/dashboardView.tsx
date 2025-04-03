// import ProjectCard from "../../components/ProjectCard/ProjectCard";
// import { Container, Header, ProjectList } from "../../styles/global";
// import  {useDashboardModel}  from "../../model/useDashboardModel";

// const DashboardView = ({projects, addProject}:ReturnType<typeof useDashboardModel>) => {

//   return (
//     <Container>
//       <Header>
//         <h1>Dashboard</h1>
//         <button onClick={() => addProject("Novo Projeto", "Descrição do novo projeto")}>
//           Adicionar Projeto
//         </button>
//       </Header>
//       <ProjectList>
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={{ ...project, id: String(project.id) }} />
//         ))}
//       </ProjectList>
//     </Container>
//   );
// };

// export default DashboardView;


import { useDashboardModel } from "../../model/useDashboardModel";
import StatsCard from "../../components/StatsCard/StatsCard";
import ChartCard from "../../components/ChartCard/ChartCard";
import ProjectTable from "../../components/ProjectTable/ProjectTable";

const Dashboard = ({stats, chartData, projects }: ReturnType<typeof useDashboardModel>) => {

  return (
    <div>
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
      <ChartCard data={chartData} />
      <ProjectTable projects={projects} />
    </div>
  );
};

export default Dashboard;

