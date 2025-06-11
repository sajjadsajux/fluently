import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="container mx-auto">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
