import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Load ho rha h na bkl...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
