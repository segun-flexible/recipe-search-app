import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../services/font";
import { Link } from "react-router-dom";

function trimTitle(trimValue, title) {
  if (title.length > trimValue) {
    return title.substr(0, trimValue) + "...";
  } else {
    return title;
  }
}
const SearchList = ({
  recipes,
  searchValue,
  handleAddToFavourite,
  bookmark,
}) => {
  const addColor = (rp) => {
    const find = bookmark.findIndex(
      (p) => p.title === rp.title && p.image === rp.image
    );

    if (find !== -1) {
      return { color: "red" };
    }
  };

  //Liked || Unliked
  const isLikedTitle = (rp) => {
    const find = bookmark.findIndex(
      (p) => p.title === rp.title && p.image === rp.image
    );

    if (find !== -1) {
      return "Unliked";
    } else {
      return "Liked";
    }
  };
  return (
    <>
      <h3 className="p-3 text-center">
        You Searched For{" "}
        <font color="red" style={{ textTransform: "uppercase" }}>
          "{searchValue}"
        </font>
      </h3>

      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-sm-6 mb-2">
            <div className="card">
              <div className="card-body">
                <img
                  src={recipe.image}
                  className="card-img img-thumbnail"
                  alt={recipe.title}
                />
                <h5 className="card-title mt-2">
                  {trimTitle(30, recipe.title)}
                </h5>
                <p className="card-text">
                  <span
                    style={addColor(recipe)}
                    onClick={() => handleAddToFavourite(recipe)}
                  >
                    <FontAwesomeIcon
                      icon="heart"
                      className=""
                      title={isLikedTitle(recipe)}
                    />
                  </span>
                  <a href={recipe.url} target="_blank">
                    <span>
                      <FontAwesomeIcon icon="link" title="Visit" />
                    </span>
                  </a>

                  <span>
                    <FontAwesomeIcon icon="share" title="Share" />
                  </span>
                </p>
                <hr></hr>
                <div className="author">
                  <img
                    src={recipe.image}
                    alt={recipe.author}
                    className="rounded"
                  />
                  <p>
                    by
                    <span className="name" title={recipe.author}>
                      {recipe.author}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchList;
