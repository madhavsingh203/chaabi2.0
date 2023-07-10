import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
  Legend,
  CartesianGrid
} from "recharts";
const BarGraph = ({ data, horizontal, vertical, barRadius, domain }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3}>
      <BarChart data={data}>
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis domain={domain} axisLine={false} tickLine={false} />
        <Bar
          radius={barRadius}
          barSize={20}
          dataKey="value"
          fill="rgba(13, 98, 255, 1), rgba(27, 89, 248, 1)"
          background={{ fill: "rgba(231, 239, 255, 1)", radius: 10 }}
        />
        <Tooltip
          contentStyle={{ borderRadius: "10px" }}
          cursor={{ fill: "transparent" }}
        />
        <CartesianGrid
          opacity={0.3}
          vertical={vertical}
          horizontal={horizontal}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
