import React, { use } from "react";
import { useLoaderData, useNavigation } from "react-router";
import ModelCard from "../components/ModelCard/ModelCard";
import { AuthContext } from "../context/AuthContext";

const AllModels = () => {
  const { loading } = use(AuthContext);
  const data = useLoaderData();
  const navigation = useNavigation();
  console.log(data);
  if (loading) return <div>loading.....</div>;
  return navigation.state === "loading" ? (
    <div>loading....</div>
  ) : (
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
