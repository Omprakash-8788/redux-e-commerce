import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "@mui/material";
import ProductListing from "./ProductListing";

const Header = () => {
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2 className="Header">E- commerce website</h2>
        </div>
      </div>

    <Outlet/>
   
    </>
     
  );
};

export default Header;
