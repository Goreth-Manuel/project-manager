import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, ChartData as ChartJSData, registerables } from "chart.js";



Chart.register(...registerables);

export type ChartData = {
    labels: string[];
    dataSets: { label: string; data: number[]; color: string }[];
  };
  

const ChartCard: React.FC<{ data: ChartData }> = ({ data }) => {
  const chartData: ChartJSData<"bar"> = {
    labels: data.labels,
    datasets: data.dataSets.map((set) => ({
      label: set.label,
      data: set.data,
      backgroundColor: set.color,
    })),
  };


  return <Bar data={chartData} />;
};

export default ChartCard;
