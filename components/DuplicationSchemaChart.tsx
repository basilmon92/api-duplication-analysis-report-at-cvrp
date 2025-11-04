import React from 'react';
import { Treemap, Tooltip, ResponsiveContainer } from 'recharts';

const schemaTreemapData = [
  {
    name: 'Shared Primitives (DateTime, LEI, Links)',
    category: 'Duplicated - High Value',
    size: 25,
    fill: '#F28B82', // Red
  },
  {
    name: 'Shared Complex Structures (Address, Account, Agent, Error)',
    category: 'Duplicated - High Value',
    size: 40,
    fill: '#F3B968', // Yellow
  },
  {
    name: 'Shared Utility Codes (Auth/ID Schemas)',
    category: 'Duplicated - Medium Value',
    size: 30,
    fill: '#C58AF9', // Purple
  },
  {
    name: 'A&T Endpoints/Data Models',
    category: 'Unique per API',
    size: 35,
    fill: '#78C9B1', // Green
  },
  {
    name: 'VRP Endpoints/Data Models',
    category: 'Unique per API',
    size: 35,
    fill: '#89B4FA', // Blue
  },
];

interface CustomizedTreemapContentProps {
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  fill: string;
}

const CustomizedTreemapContent: React.FC<CustomizedTreemapContentProps> = ({
  depth, x, y, width, height, name, fill,
}) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill,
          stroke: '#fff', 
          strokeWidth: 2,
          strokeOpacity: 1,
        }}
        rx={4}
      />
      {depth === 1 && width > 80 && height > 40 ? (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#fff"
          fontSize={12}
          className="font-medium"
          style={{ pointerEvents: 'none' }}
        >
          {name.split(' ').map((word, index, arr) => (
            <tspan key={index} x={x + width / 2} dy={index === 0 ? `-${(arr.length / 2 - 0.5) * 1.1}em` : '1.1em'}>
              {word}
            </tspan>
          ))}
        </text>
      ) : null}
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="bg-white/80 p-3 border border-slate-200 rounded-lg shadow-lg text-sm backdrop-blur-sm">
        <p style={{ color: item.fill }} className="font-bold text-md mb-1">{item.category}</p>
        <p className="text-slate-800">{item.name}</p>
        <p className="text-slate-500 mt-1">Weight: <span className="font-semibold text-slate-700">{item.size}</span></p>
      </div>
    );
  }
  return null;
};

const DuplicationSchemaChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="text-left mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Schema Definitions (Swagger/OpenAPI)</h3>
        <p className="text-sm text-slate-500">Majority of schema weight is in shared Open Banking components.</p>
      </div>
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={schemaTreemapData}
            dataKey="size"
            aspectRatio={4 / 3}
            content={<CustomizedTreemapContent />}
            isAnimationActive={false}
          >
            <Tooltip content={<CustomTooltip />} />
          </Treemap>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DuplicationSchemaChart;