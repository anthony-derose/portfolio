import React from "react";
import {Outlet} from "react-router-dom";
import NavbarElements from "../components/NavbarElements";

const Layout = () => {
  return (
    <>
      <NavbarElements />
      <Outlet />
    </>
  );
};

export default Layout;