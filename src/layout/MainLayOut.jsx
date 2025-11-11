import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayOut = () => {
  return (
    <div className="">
      <div className=" sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto my-9 min-h-screen">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayOut;
