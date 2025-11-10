import React, { useEffect, useState } from "react";
import LatestModelCard from "../components/LatestModelCard/LatestModelCard";
import CardStyleLoading from "../components/Loading/CardStyleLoading";

const LatestModels = () => {
  const [models, setModel] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/latest-models")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
        Featured AI Models
      </h2>

      {loading ? (
        <CardStyleLoading></CardStyleLoading>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <LatestModelCard key={model._id} model={model}></LatestModelCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestModels;
