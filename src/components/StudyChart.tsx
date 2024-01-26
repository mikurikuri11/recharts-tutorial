import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import studyDataList from './studyData';

const StudyChart = () => (
  <div className="container">
    <LineChart
      width={700}
      height={300}
      data={studyDataList}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis dataKey="合計" />
      <Line type="monotone" dataKey="合計" stroke="#8884d8" />
      <Line type="monotone" dataKey="達成数" stroke="#3ba2f6" />
      <Line type="monotone" dataKey="達成率" stroke="#ff0092" />
      <Legend />
      <Tooltip />
    </LineChart>
  </div>
);

export default StudyChart;