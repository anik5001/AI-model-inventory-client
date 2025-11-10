import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyModelCard from "../components/MyModelCard/MyModelCard";
import CardStyleLoading from "../components/Loading/CardStyleLoading";

const MyModels = () => {
  const { user } = use(AuthContext);
  const [models, setModel] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://ai-model-inventory.vercel.app/my-models?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return loading ? (
    <CardStyleLoading></CardStyleLoading>
  ) : (
    <div>
      <h1 className="text-center text-2xl font-bold mb-2">
        My Models : <span className="text-blue-700">{models.length}</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {models.map((model) => (
          <MyModelCard key={model._id} model={model}></MyModelCard>
        ))}
      </div>
    </div>
  );
};

export default MyModels;
