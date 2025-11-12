import React, { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import CircularLoading from "../components/Loading/CircularLoading";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";

const DetailsPage = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [refetch, setReFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingActionPurchased, setLoadingActionPurchased] = useState(false);
  const [loadingActionDelete, setLoadingActionDelete] = useState(false);
  const navigate = useNavigate();
  // console.log(id);
  useEffect(() => {
    setLoading(true);
    fetch(`https://ai-model-inventory.vercel.app/models/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, id, refetch]);

  const handleDeleteModel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingActionDelete(true);
        fetch(`https://ai-model-inventory.vercel.app/models/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount)
              Swal.fire({
                title: "Deleted!",
                text: "Your model has been deleted.",
                icon: "success",
              });
            setLoadingActionDelete(false);

            navigate("/all-models");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  const handlePurchase = () => {
    const purchasedData = {
      modelId: model._id,
      name: model.name,
      framework: model.framework,
      useCase: model.useCase,
      createdBy: model.createdBy,
      purchasedBy: user.email,
      image: model.image,
    };
    // console.log(purchasedData);
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Model Purchase!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingActionPurchased(true);
        fetch(
          `https://ai-model-inventory.vercel.app/purchased-models/${model._id}`,
          {
            method: "POST",
            headers: {
              authorization: `Bearer ${user.accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(purchasedData),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId)
              Swal.fire({
                title: "Thank You!",
                text: "Your model has been purchased successfully.",
                icon: "success",
              });
            setReFetch(!refetch);
            setLoadingActionPurchased(false);
            // console.log(data);
          })
          .catch((err) => {
            toast.error(err);
          });
      }
    });
  };
  return loading ? (
    <CircularLoading></CircularLoading>
  ) : (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="bg-white shadow-xl border border-gray-200 rounded-2xl overflow-hidden transition-all hover:shadow-2xl duration-300">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 items-center md:items-start">
          {/* Left Side Image */}
          <div className="shrink-0 w-full md:w-1/3">
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-auto rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center space-y-5 w-full md:w-2/3">
            {/* Model Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-3">
              {model.name}
              <span className="text-3xl text-indigo-400">✨</span>
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-lg bg-blue-100 text-blue-600 border border-blue-300 font-medium">
                {model.framework}
              </span>
              <span className="badge badge-lg bg-pink-100 text-pink-600 border border-pink-300 font-medium">
                {model.useCase}
              </span>
              <span className="badge badge-lg bg-cyan-100 text-cyan-700 border border-cyan-300 font-medium">
                {model.dataset}
              </span>
              <span className="badge badge-lg bg-green-100 text-green-700 border border-green-300 font-medium">
                Purchased: {model.purchased}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {model.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={handlePurchase}
                className="btn bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6"
              >
                {loadingActionPurchased ? (
                  <FadeLoader color="#fff" />
                ) : (
                  "Purchase Model"
                )}
              </button>

              {user.email === model.createdBy && (
                <>
                  <Link
                    to={`/update-model/${model._id}`}
                    className="btn bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6"
                  >
                    Edit Model
                  </Link>

                  <button
                    onClick={handleDeleteModel}
                    className="btn bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6"
                  >
                    {loadingActionDelete ? (
                      <FadeLoader color="#fff" />
                    ) : (
                      "Delete"
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
