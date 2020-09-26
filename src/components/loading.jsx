import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loading text-center">
        <div className="spinner-grow mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
