import React from "react";
import "./card.css";

const Card = ({ title, content }) => {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
