import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <Link to={`/cocktail/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="cocktail-footer">
        <Link to={`/cocktail/${id}`}>
          <h3>{name}</h3>
        </Link>
        <h4>{glass}</h4>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Cocktail;
