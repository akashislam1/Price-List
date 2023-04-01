import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      physics: 87,
      chemistry: 92,
      math: 95,
    },
    {
      id: 2,
      name: "Bob",
      physics: 75,
      chemistry: 68,
      math: 83,
    },
    {
      id: 3,
      name: "Charlie",
      physics: 91,
      chemistry: 88,
      math: 79,
    },
    {
      id: 4,
      name: "David",
      physics: 83,
      chemistry: 79,
      math: 91,
    },
    {
      id: 5,
      name: "Eve",
      physics: 62,
      chemistry: 70,
      math: 75,
    },
    {
      id: 6,
      name: "Frank",
      physics: 84,
      chemistry: 82,
      math: 80,
    },
    {
      id: 7,
      name: "Grace",
      physics: 95,
      chemistry: 96,
      math: 98,
    },
    {
      id: 8,
      name: "Henry",
      physics: 71,
      chemistry: 78,
      math: 81,
    },
    {
      id: 9,
      name: "Isabel",
      physics: 89,
      chemistry: 82,
      math: 87,
    },
    {
      id: 10,
      name: "Jack",
      physics: 78,
      chemistry: 84,
      math: 75,
    },
    {
      id: 11,
      name: "Kate",
      physics: 92,
      chemistry: 88,
      math: 95,
    },
    {
      id: 12,
      name: "Liam",
      physics: 81,
      chemistry: 75,
      math: 79,
    },
  ];

  return (
    <div>
      <h2 className="text-center text-4xl text-white font-bold bg-purple-600 my-6 p-4">
        Dashboard
      </h2>
      <div className="w-full">
        <LineChart width={700} height={300} data={students}>
          <Line dataKey="physics" stroke="#1234d8"></Line>
          <Line dataKey="math" stroke="#fc03fc"></Line>
          <Line dataKey="chemistry" stroke="#fc035e"></Line>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
