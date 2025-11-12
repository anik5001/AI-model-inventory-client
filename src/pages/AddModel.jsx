import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FadeLoader } from "react-spinners";

const AddModel = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const date = new Date();
  // console.log(date);
  const handleAddModel = (e) => {
    setLoading(true);
    e.preventDefault();
    const modelData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
      createdBy: user.email,
      createdAt: date,
      purchased: 0,
    };

    // console.log(modelData);
    fetch("https://ai-model-inventory.vercel.app/models", {
      method: "POST",
      headers: {
        authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modelData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your model has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        setLoading(false);
        navigate("/all-models");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mt-3">
        <div className="card-body p-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-700 text-center">
            Add New AI Model
          </h2>
          <form onSubmit={handleAddModel} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter name"
              />
            </div>

            {/* framework */}
            <div>
              <label className="label font-medium">Framework</label>
              <input
                type="text"
                name="framework"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Framework"
              />
            </div>
            {/* use case */}
            <div>
              <label className="label font-medium">UseCase</label>
              <input
                type="text"
                name="useCase"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter UseCase"
              />
            </div>
            {/* dataset */}
            <div>
              <label className="label font-medium">DataSet</label>
              <input
                type="text"
                name="dataset"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Dataset"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[200px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* image URL */}
            <div>
              <label className="label font-medium">Image</label>
              <input
                type="url"
                name="image"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}

            <button
              type="submit"
              className="btn w-full text-white mt-1 rounded-full bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              {loading ? <FadeLoader /> : "Add Model"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
