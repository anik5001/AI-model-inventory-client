import React from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../components/ModelCard/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-2">All Models </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {data.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
