import React from 'react';
import DuplicationConfigChart from './DuplicationConfigChart';
import DuplicationDocChart from './DuplicationDocChart';
import DuplicationSchemaChart from './DuplicationSchemaChart';

// SVG Icons for the summary list
const SchemaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const EnvIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 16v-2m0-10v2m0 6v2m-6-10H4m16 0h-2M6 12H4m16 0h-2m-6 6H4m16 0h-2" />
  </svg>
);

const AuthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const DocIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const DuplicationAnalysis: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="text-left">
        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>
        <p className="mt-2 text-lg text-slate-600">Quantitative Duplication Analysis: A&T vs. Commercial VRP APIs</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <DuplicationConfigChart />
        <DuplicationDocChart />
      </div>

      <div className="grid grid-cols-1 gap-8">
        <DuplicationSchemaChart />
        <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Optimization Summary</h2>
          <p className="mb-6 text-slate-500">Key actions to consolidate components and reduce duplication.</p>
          <ul className="space-y-6 text-slate-700">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center mr-4 mt-1 ring-4 ring-blue-50">
                <SchemaIcon />
              </span>
              <div>
                <strong className="font-semibold text-slate-800">Centralized Shared Schema</strong>
                <p className="text-slate-500">Extract common definitions to <code className="bg-slate-100 text-xs rounded px-1 py-0.5 text-emerald-700">ob-shared-components.json</code> and use <code className="bg-slate-100 text-xs rounded px-1 py-0.5 text-emerald-700">$ref</code> pointers.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center mr-4 mt-1 ring-4 ring-blue-50">
                <EnvIcon />
              </span>
              <div>
                <strong className="font-semibold text-slate-800">Single Postman Environment</strong>
                 <p className="text-slate-500">Use a single shared environment file (<code className="bg-slate-100 text-xs rounded px-1 py-0.5 text-emerald-700">NatWest-Shared-Env.json</code>) to eliminate duplicated variables.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center mr-4 mt-1 ring-4 ring-blue-50">
                <AuthIcon />
              </span>
              <div>
                <strong className="font-semibold text-slate-800">Reusable Authentication Flow</strong>
                 <p className="text-slate-500">Create a dedicated "Authentication" Postman Collection. Service-specific collections should only contain unique API calls.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center mr-4 mt-1 ring-4 ring-blue-50">
                <DocIcon />
              </span>
              <div>
                <strong className="font-semibold text-slate-800">Centralized Documentation</strong>
                 <p className="text-slate-500">Create a central location for API-agnostic documentation covering Security, mTLS, Token Management, and Standard Headers.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DuplicationAnalysis;