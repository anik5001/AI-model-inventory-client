import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const UpdateModelPage = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [model, setModel] = useState({});
  // console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/models/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModel(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleUpdateModel = (e) => {
    e.preventDefault();
    const modelData = {
      name: e.target.name.value,
      framework: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    // console.log(modelData);
    fetch(`http://localhost:3000/update-model/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modelData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Update model successful");
        navigate(`/model-details/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Update Model</h2>
          <form onSubmit={handleUpdateModel} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={model.name}
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
                defaultValue={model.framework}
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
                defaultValue={model.useCase}
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
                defaultValue={model.dataset}
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter Dataset"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                defaultValue={model.description}
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
                defaultValue={model.image}
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              Update Model
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateModelPage;
