import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";
import { div } from "framer-motion/client";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-base-200 shadow-2xl p-3 rounded-2xl">
        <img src={errorImg} alt="" />
        <p className="text-2xl font-bold text-center">
          Oops! This AI model doesn’t exist.
        </p>
        <Link to="/" className="btn btn-primary w-full my-10">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
