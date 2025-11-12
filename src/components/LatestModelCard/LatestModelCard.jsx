import React from "react";

const LatestModelCard = ({ model }) => {
  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {model.name}
      </h3>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          Framework:
        </span>
        <span className="px-2 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-md">
          {model.framework}
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {model.description?.slice(0, 100) || "No description available."}
      </p>
    </div>
  );
};

export default LatestModelCard;
