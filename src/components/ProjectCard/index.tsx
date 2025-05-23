import { Card } from "./style";

export function ProjectCard() {
  return (
    <>
      <Card>
        <div className="cardone">
          <h4>Total de tarefas concluidas</h4>
          <h5>8</h5>
        </div>

        <div className="cardtwo">
          <h4>Total de tarefas em andamento</h4>
          <h5>2</h5>
        </div>

        <div className="cardthree">
          <h4>Total de tarefas pendentes</h4>
          <h5>1</h5>
        </div>

        <div className="cardone">
          <h4>Total de tarefas concluidas</h4>
          <h5>8</h5>
        </div>
      </Card>
    </>
  );
}
