import React from "react";
import { Link } from "react-router";

const MyPurchasedModelCard = ({ model }) => {
  return (
    <div className=" hover:scale-105 transition ease-in-out">
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={model.image} alt="" className="rounded-xl md:h-[200px]" />
        </figure>
        <div className="card-body ">
          <h2 className="text-2xl font-bold text-center">{model.name}</h2>
          <div className="flex justify-around my-3">
            <div className="">
              {/* <p>Framework:</p> */}
              <div className="badge badge-soft badge-primary">
                {model.framework}
              </div>
            </div>
            <div className="">
              {/* <p>Use Case:</p> */}
              <div className="badge badge-soft badge-secondary">
                {model.useCase}
              </div>
            </div>
          </div>
          <p className="font-bold text-center mb-1">
            CreatedBy: <span className="font-medium">{model.createdBy}</span>
          </p>
          <p className="font-bold text-center mb-1">
            PurchasedBy:{" "}
            <span className="font-medium">{model.purchasedBy}</span>
          </p>

          <div className="w-full">
            <Link
              to={`/model-details/${model.modelId}`}
              className="btn btn-primary w-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPurchasedModelCard;
