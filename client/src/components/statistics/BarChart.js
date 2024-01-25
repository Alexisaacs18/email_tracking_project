import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";

function BarChart({chartData}){

  return(
    <Bar data={chartData} options={{
      scales: {
        y: {
          beginAtZero: true,
        },
      },
     
    }}
    style={{ height: '10vh', width: '10vh' }} // Adjust the values accordingly
  />
  )
}
export default BarChart
