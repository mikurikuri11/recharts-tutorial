import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import studyDataList from "./studyData";

const pStyle = {
  color: 'blue',
};

const divStyle = {
  background: 'linear-gradient(to right, #261717, #932a2a87)',
  fontWeight: 'bold',
  border: 'solid 2px blue',
};

const StudyChart = () => (
  <div className="container">
    <LineChart
      width={1000}
      height={600}
      data={studyDataList}
      margin={{
        top: 10,
        right: 40,
        left: 5,
        bottom: 15,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        interval={0}
        // angle={-30}
        dx={-10}
        dy={20}
        tick={{
          fontSize: 12,
          fill: "#000",
        }}
      />
      <YAxis dataKey="合計" tickCount={5} />
      {/* <Line type="monotone" dataKey="達成数" stroke="#69ae31" strokeWidth={2} /> */}
      <Line type="monotone" dataKey="達成率" stroke="#324d5b" strokeWidth={2} />
      <Legend verticalAlign="top" height={30} iconSize={20} iconType="plainline" />
      <Tooltip contentStyle={divStyle} labelStyle={pStyle} />
    </LineChart>
  </div>
);

export default StudyChart;
