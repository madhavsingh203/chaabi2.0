import React from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Label,
  Legend
} from "recharts";
const PieGraph = () => {
  const data = [
    { title: "Finished Training", value: 22, fill: "#B4CEFF" },
    { title: "Chapter A", value: 20, fill: "#3333334D" },
    { title: "Chapter B", value: 7, fill: "#8400D5" },
    { title: "Chapter C", value: 22, fill: "#425F57" },
    { title: "Haven't Started Yet", value: 34, fill: "#ED1C24" }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={1}>
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={40}
          labelLine={false}
          nameKey="title"
          style={{
            boxShadow: "10px black"
          }}
        />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Label value="title" style={{ fill: "white" }} />
        {/* <text  fill="white" textAnchor="middle" dominantBaseline="central">hello</text> */}
        <Legend
          iconType="circle"
          wrapperStyle={{
            paddingLeft: "0px"
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
