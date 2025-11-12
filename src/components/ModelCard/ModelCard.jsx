import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <img
        src={model.image}
        alt=""
        className="rounded-xl mb-4 h-[150px] mx-auto"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        {model.name}
      </h2>
      <div className="flex justify-center gap-2 mb-4">
        <span className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
          {model.framework}
        </span>
        <span className="bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full">
          {model.useCase}
        </span>
      </div>
      <Link
        to={`/model-details/${model._id}`}
        className="btn w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white font-semibold py-2 rounded-lg transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ModelCard;
