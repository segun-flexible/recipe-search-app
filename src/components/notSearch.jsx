import React from "react";

import svg from "../img/svg.png";
import SearchForm from "./searchForm";

const NotSearch = ({ onSearch }) => {
  return (
    <>
      <div className="empty">
        <img src={svg} />
        <h4>Opps!, You Haven't Search Anything</h4>
        <SearchForm onSearch={onSearch} />
      </div>
    </>
  );
};

export default NotSearch;
