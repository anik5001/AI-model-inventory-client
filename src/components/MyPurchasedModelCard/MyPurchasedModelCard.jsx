import React from "react";
import { Link } from "react-router";

const MyPurchasedModelCard = ({ model }) => {
  return (
    <div className="max-w-sm bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
      <img
        src={model.image}
        alt={model.name}
        className=" h-[200px] mx-auto rounded-xl border border-gray-200 shadow-sm hover:scale-105 transition-transform duration-300 mb-4"
      />
      <h2 className="text-2xl font-extrabold text-gray-900 text-center bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
        {model.name}
      </h2>
      <div className="flex justify-center gap-3 mt-3 mb-4">
        <span className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full hover:bg-indigo-200 transition">
          {model.framework}
        </span>
        <span className="bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full hover:bg-pink-200 transition">
          {model.useCase}
        </span>
      </div>
      <div className="text-sm text-gray-600 mb-4 text-center">
        <p>
          <span className="font-semibold text-gray-800">Created By:</span>{" "}
          {model.createdBy}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Purchased By:</span>{" "}
          {model.purchasedBy}
        </p>
      </div>
      <Link
        to={`/model-details/${model.modelId}`}
        className=" btn w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2.5 rounded-xl hover:opacity-90 transition shadow-md hover:shadow-lg"
      >
        View Details
      </Link>
    </div>
  );
};

export default MyPurchasedModelCard;
