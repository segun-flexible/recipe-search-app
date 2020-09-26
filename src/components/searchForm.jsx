import React from "react";

const SearchForm = ({ onSearch }) => {
  return (
    <>
      <form onSubmit={onSearch} className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
