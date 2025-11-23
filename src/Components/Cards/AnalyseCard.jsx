import React from 'react';

function AnalyseCard({ data }) {
  return (
    <div className="grid gap-4 mt-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mb-10 ">
      {data.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col p-5 rounded-2xl shadow-lg border bg-white 
                     border-gray-300 transition-all duration-300 transform 
                     hover:-translate-y-1 hover:border-indigo-600 hover:shadow-indigo-600/30 cursor-pointer"
        >
          <div className="flex items-center mb-3">
            <div className="mr-4">{stat.icon}</div>

            <div>
              <h2 className="text-md font-semibold text-gray-700">
                {stat.name}
              </h2>

              <p className="text-xl font-bold text-black">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnalyseCard;
