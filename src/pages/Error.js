import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h2>Something went wrong...</h2>
        <Link to="/" className="btn btn-primary">
          Back to home page
        </Link>
      </div>
    </section>
  );
};

export default Error;
