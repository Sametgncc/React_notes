import React from "react";
import { FormControl } from "react-bootstrap";

import "./search-box.scss";

const SearchBox = ( { setSearchText }) => {


  return (
    <div className="search-box">
      <h1>Turkish Cusine</h1>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setSearchText(e.target.value)}
      ></FormControl>
    </div>
  );
};

export default SearchBox;
