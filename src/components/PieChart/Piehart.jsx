import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Piehart = () => {
  const chart1Data = [
    { name: "Category A", value: 60 },
    { name: "Category B", value: 45 },
    { name: "Category C", value: 55 },
    { name: "Category D", value: 70 },
    { name: "Category E", value: 40 },
    { name: "Category F", value: 50 },
    { name: "Category G", value: 75 },
    { name: "Category H", value: 65 },
    { name: "Category I", value: 80 },
    { name: "Category J", value: 50 },
    { name: "Category K", value: 45 },
    { name: "Category L", value: 60 },
  ];

  const chart2Data = [
    { name: "Type A", value: 55 },
    { name: "Type B", value: 60 },
    { name: "Type C", value: 75 },
    { name: "Type D", value: 40 },
    { name: "Type E", value: 65 },
    { name: "Type F", value: 50 },
    { name: "Type G", value: 70 },
    { name: "Type H", value: 80 },
    { name: "Type I", value: 45 },
    { name: "Type J", value: 60 },
    { name: "Type K", value: 50 },
    { name: "Type L", value: 55 },
  ];

  return (
    <div>
      <h2 className="text-center text-4xl text-white font-bold bg-purple-600 my-6 p-4">
        Pie Chart
      </h2>
      <div>
        <PieChart className="mx-auto" width={300} height={300}>
          <Pie
            data={chart1Data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={chart2Data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Piehart;
