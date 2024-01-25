import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
function StatsCard({ title, sent, replied, unsubscribed }) {

const replyRate = replied / sent;
const unsubscribeRate = unsubscribed / sent;



  const generateChartData = (replyRate,unsubscribeRate) => ({
    labels: ["Rates"],
    datasets: [
      {
        label: "Reply Rate",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [replyRate],
      },
      {
        label: "Unsubscribe Rate",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [unsubscribeRate],
      },
    ],
  });

  const chartData = generateChartData(replyRate,unsubscribeRate);

  return (
    <div className="statscard">
      <li>{title}</li>
      <li>{`Reply Rate: ${(replied / sent).toFixed(2)}%`}</li>
      <li>{`Unsubscribe Rate: ${(unsubscribed / sent).toFixed(2)}%`}</li>
      <Bar
        data={chartData}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
         
        
          height: 300, // Set the desired height
          width: 500, // Set the desired width
        }}
      />
    </div>
  );
}

export default StatsCard;
