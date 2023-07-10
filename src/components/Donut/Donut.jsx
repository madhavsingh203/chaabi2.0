import React from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Label,
  Legend
} from "recharts";
const Donut = () => {
  const data = [
    {
      title: "passed",
      value: 193,
      fill: "#018E42"
    },
    {
      title: "failed",
      value: 134,

      fill: "#ED1C24"
    }
  ];
  return (
    <ResponsiveContainer width="70%" height="100%" aspect={1}>
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={60}
          labelLine={false}
          nameKey="title"
          style={{
            boxShadow: "10px black"
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Donut;
