'use client'
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TodoChart = ({ todos }) => {
  const completed = todos.filter((todo) => todo.completed).length;
  const notCompleted = todos.length - completed;

  const data = {
    labels: ["Completed", "Not Completed"],
    datasets: [
      {
        data: [completed, notCompleted],
        backgroundColor: ["#34D399", "#F87171"],
        hoverBackgroundColor: ["#059669", "#B91C1C"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default TodoChart;
