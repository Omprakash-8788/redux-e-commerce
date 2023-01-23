import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "@mui/material";
import ProductListing from "./ProductListing";

const Header = () => {
  return (
    <div>
      <div style={{ fontSize: "1cm" }}>
        <AppBar style={{ height: "1cm" }}>Fake Shop</AppBar>
      </div>
      <div>
        <ProductListing />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
