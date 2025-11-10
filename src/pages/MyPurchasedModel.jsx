import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyPurchasedModelCard from "../components/MyPurchasedModelCard/MyPurchasedModelCard";
import CardStyleLoading from "../components/Loading/CardStyleLoading";

const MyPurchasedModel = () => {
  const { user } = use(AuthContext);
  const [models, setModel] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://ai-model-inventory.vercel.app/my-purchased-models?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
        console.log(data);
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
        My Purchased Models :{" "}
        <span className="text-blue-700">{models.length}</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {models.map((model) => (
          <MyPurchasedModelCard
            key={model._id}
            model={model}
          ></MyPurchasedModelCard>
        ))}
      </div>
    </div>
  );
};

export default MyPurchasedModel;
