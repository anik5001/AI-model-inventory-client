import React, { useEffect, useState } from "react";

import ModelCard from "../components/ModelCard/ModelCard";
import CardStyleLoading from "../components/Loading/CardStyleLoading";

const AllModels = () => {
  const [models, setModel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ai-model-inventory.vercel.app/models")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchText);
    setLoading(true);
    fetch(`https://ai-model-inventory.vercel.app/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFilterByFramework = (value) => {
    // e.preventDefault();
    const searchText = value;
    console.log(searchText);
    setLoading(true);
    fetch(
      `https://ai-model-inventory.vercel.app/filter?framework=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return loading ? (
    <CardStyleLoading></CardStyleLoading>
  ) : (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 md:mb-7 text-center">
        All Models{" "}
      </h2>
      {/* search */}
      <div className="flex justify-around items-center gap-1 md:mb-10">
        <div></div>
        <div>
          <form onSubmit={handleSearch} className="flex gap-2">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" name="search" placeholder="Search" />
            </label>
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          <select
            onChange={(e) => handleFilterByFramework(e.target.value)}
            name="framework"
            defaultValue=""
            className="select select-info"
          >
            <option value="" disabled>
              Pick a Framework
            </option>
            <option value="TensorFlow">TensorFlow</option>
            <option value="PyTorch">PyTorch</option>
          </select>
        </div>
      </div>
      {models.length === 0 ? (
        <div className="text-center font-bold ">Not Found Model!</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {models.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllModels;
