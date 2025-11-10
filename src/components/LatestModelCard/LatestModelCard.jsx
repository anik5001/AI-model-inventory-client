import React from "react";

const LatestModelCard = ({ model }) => {
  return (
    <div className="p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 border">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{model.name}</h3>
      <p className="text-sm text-blue-500 mb-3">
        Framework:{" "}
        <span className="badge badge-primary">{model.framework}</span>
      </p>
      <p className="text-gray-600 text-sm">
        {model.description?.slice(0, 100) || "No description available."}
      </p>
    </div>
  );
};

export default LatestModelCard;
