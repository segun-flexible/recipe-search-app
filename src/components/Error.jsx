import React from "react";

const Erorr = ({ message }) => {
  return (
    <div className="loading text-center text-danger">
      <center>
        <h4>{message}</h4>
      </center>
    </div>
  );
};

export default Erorr;
