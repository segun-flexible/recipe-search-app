import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../services/font";

import SearchForm from "./searchForm";

const Header = ({ hide, onSearch, bookmark }) => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark mb-5">
        <span className="navbar-brand text-white">Food Recipe</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            hide.length > 0
              ? "navbar-collapse collapse"
              : "collapse navbar-collapse"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span type="button" className="btn btn-primary">
                <FontAwesomeIcon
                  icon="heart"
                  className={bookmark.length > 0 ? "text-danger" : " "}
                />{" "}
                Favourite
                <span className="badge badge-danger ml-1">
                  {bookmark.length}
                </span>
              </span>
            </li>
          </ul>
          <div style={{ float: "right" }}>
            <SearchForm onSearch={onSearch} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
