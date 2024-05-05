import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default PageNotFound;