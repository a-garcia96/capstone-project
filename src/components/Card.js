import React from "react";
import deliveryBike from "../assets/delivery-bike.svg";

const Card = ({ recipeTitle, recipePrice, recipeDesc, recipeImg }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={recipeImg} />
      </div>
      <div className="card__information">
        <div className="card__row">
          <h3 className="card__title">{recipeTitle}</h3>
          <p className="card__price">${recipePrice}</p>
        </div>
        <p className="card__desc">{recipeDesc}</p>
        <div className="card__btn-wrapper">
          <button className="card__btn">
            <a href="#">Order a delivery</a>
            <img
              className="card__icon"
              src={deliveryBike}
              alt="icon of a delivery bike"
            />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
