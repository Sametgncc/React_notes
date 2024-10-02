import React from "react";
import { TfiHome } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import CurrencyList from "../27-currencies/currency-list";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="p-4 bg-info d-flex align-items-center justify-content-between">
      <h1>React.JS</h1>

      <CurrencyList/>

      {pathname !== "/" && (
        <div>
          <Link to="/" className="btn btn-outline-light btn-lg">
            <TfiHome />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
