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
    <div className="max-w-6xl mx-auto p-2 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-2 md:p-8">
          <div className="shrink-0 w-full md:w-1/3">
            <img
              src={model.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {model.name}
            </h1>

            <div className="flex flex-wrap gap-3">
              <div className="badge badge-lg badge-outline badge-primary font-medium">
                {model.framework}
              </div>

              <div className="badge badge-lg badge-outline badge-secondary font-medium">
                {model.useCase}
              </div>
              <div className="badge badge-lg badge-outline badge-info font-medium">
                {model.dataset}
              </div>

              <div className="badge badge-lg badge-outline badge-success font-medium">
                Purchased:{model.purchased}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {model.description}
            </p>

            <div className="flex gap-1 justify-center md:justify-start mt-6">
              <button
                onClick={handlePurchase}
                className="btn btn-primary rounded-full"
              >
                {loadingActionPurchased ? (
                  <FadeLoader color="#0096FF" />
                ) : (
                  " Purchase Model"
                )}
              </button>
              {user.email === model.createdBy && (
                <div className="flex gap-1">
                  <Link
                    to={`/update-model/${model._id}`}
                    className="btn  btn-info rounded-full "
                  >
                    Edit Model
                  </Link>

                  <button
                    onClick={handleDeleteModel}
                    className="btn btn-secondary rounded-full "
                  >
                    {loadingActionDelete ? (
                      <FadeLoader color="#0096FF" />
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
