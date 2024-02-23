import React from "react";
import "./card.css";

const Card = ({ Product, ProductImg }) => {
  return Product ? (
    <div className="card">
      <div className="top">
        <img src={Product?.imgSrc} alt="" />
      </div>
      <div className="bottom">
        <h4>{Product?.title}</h4>
        <h3>{Product?.off}</h3>
      </div>
    </div>
  ) : (
    <div className="card1">
      <img src={ProductImg.imgSrc} alt="" />
    </div>
  );
};

export default Card;
