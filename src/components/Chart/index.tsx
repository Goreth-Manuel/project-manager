import {  ChartContainer } from "./styles";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
    const data = {
        labels: ["Concluídas", "Em andamento", "Pendentes"],
        datasets: [
            {
                data: [8, 2, 1], // Valores correspondentes às tarefas
                backgroundColor: ["#28a745", "#ffc107", "#dc3545"], // Cores para cada categoria
                hoverBackgroundColor: ["#218838", "#e0a800", "#c82333"],
            },
        ],
    };

    return (
        <>
       <ChartContainer>
        <Doughnut data={data} />
        </ChartContainer>
        </>
    );
}
