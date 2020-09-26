import React from "react";

const Paginate = ({ activePage, postPerPage, list, handlePageControl }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(list / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <br></br>
      <br></br>
      <div className="paginate">
        <nav aria-label="...">
          <ul class="pagination ">
            {pages.length > 0 &&
              pages.map((p) => (
                <li
                  class={activePage === p ? "page-item active" : "page-item"}
                  onClick={() => handlePageControl(p)}
                >
                  <a class="page-link">{p}</a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Paginate;

/* 
<li class="page-item active" aria-current="page">
            <span class="page-link">
              1<span class="sr-only">(current)</span>
            </span>
          </li>
*/
