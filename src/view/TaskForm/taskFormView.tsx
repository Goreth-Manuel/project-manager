import TaskForm from "../../components/TaskForm/TaskForm";
import { Container, Header } from "../../styles/global";
import  {useTaskFormModel } from "../../model/useTaskFormModel";

const TaskFormView = ({task, setTask, handleFormSubmit}: ReturnType<typeof useTaskFormModel>) => {


  return (
    <Container>
      <Header>
        <h1>Criar Nova Tarefa</h1>
      </Header>
      <TaskForm task={task} setTask={setTask} onSubmit={handleFormSubmit} />
    </Container>
  );
};

export default TaskFormView;
