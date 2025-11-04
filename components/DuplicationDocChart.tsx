import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const docData = [
  { name: 'Security Considerations', A_T: 0, VRP: 0, Shared: 1 },
  { name: 'Token Management', A_T: 0, VRP: 0, Shared: 1 },
  { name: 'Standard Headers', A_T: 0, VRP: 0, Shared: 1 },
  { name: 'Transaction Codes (A&T)', A_T: 1, VRP: 0, Shared: 0 },
  { name: 'VRP Subtypes/Limits (VRP)', A_T: 0, VRP: 1, Shared: 0 },
];

const DuplicationDocChart: React.FC = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col">
    <div className="text-left mb-4">
      <h3 className="text-lg font-semibold text-slate-800">Documentation Content</h3>
      <p className="text-sm text-slate-500">Core security & token docs are entirely duplicated.</p>
    </div>
    <div className="flex-grow w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={docData}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          layout="vertical"
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={150} 
            tick={{ fill: '#475569', fontSize: 12 }} 
            axisLine={false}
            tickLine={false}
          />
          <XAxis type="number" hide={true} />
          <Tooltip 
            cursor={{ fill: 'rgba(137, 180, 250, 0.1)' }}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', borderRadius: '0.5rem', backdropFilter: 'blur(4px)' }}
            labelStyle={{ color: '#1e293b' }}
          />
          <Legend 
            iconType="circle" 
            iconSize={8}
            formatter={(value) => <span className="text-slate-600">{value}</span>}
          />
          <Bar dataKey="Shared" stackId="a" fill="#F3B968" name="Shared Topic (Duplicated)" />
          <Bar dataKey="A_T" stackId="a" fill="#78C9B1" name="A&T Unique" />
          <Bar dataKey="VRP" stackId="a" fill="#89B4FA" name="VRP Unique" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default DuplicationDocChart;