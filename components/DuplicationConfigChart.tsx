import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const configData = [
  { name: 'Duplicated Config Variables', value: 90 },
  { name: 'Unique Config Variables', value: 10 },
];
const COLORS = ['#F28B82', '#89B4FA']; // Red, Blue

const DuplicationConfigChart: React.FC = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col">
    <div className="text-left mb-4">
      <h3 className="text-lg font-semibold text-slate-800">API Tooling & Config</h3>
      <p className="text-sm text-slate-500">~90% of core Postman variables are duplicated.</p>
    </div>
    <div className="flex-grow w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={configData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={5}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {configData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backdropFilter: 'blur(4px)' }}
            labelStyle={{ color: '#1e293b' }}
          />
          <Legend 
            iconType="circle" 
            iconSize={8}
            formatter={(value) => <span className="text-slate-600">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default DuplicationConfigChart;