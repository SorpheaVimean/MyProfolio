import React from "react";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="bg-Background text-text">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
