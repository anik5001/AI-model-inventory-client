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
      `https://ai-model-inventory.vercel.app/my-purchased-models?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);
  return loading ? (
    <CardStyleLoading></CardStyleLoading>
  ) : (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">
        My Purchased Models :{" "}
        <span className="text-blue-700">{models.length}</span>
      </h2>

      {models.length === 0 ? (
        <div className="text-center ">You haven’t added the model yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {models.map((model) => (
            <MyPurchasedModelCard
              key={model._id}
              model={model}
            ></MyPurchasedModelCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPurchasedModel;
