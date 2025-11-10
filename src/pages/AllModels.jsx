import React, { useEffect, useState } from "react";

import ModelCard from "../components/ModelCard/ModelCard";
import CardStyleLoading from "../components/Loading/CardStyleLoading";

const AllModels = () => {
  const [models, setModel] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ai-model-inventory.vercel.app/models")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading ? (
    <CardStyleLoading></CardStyleLoading>
  ) : (
    <div>
      <h1 className="text-center text-2xl font-bold mb-2">All Models </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
