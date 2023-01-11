import React from 'react'

const Card = ({ recipeTitle, recipePrice, recipeDesc, recipeImg }) => {
  return (
    <div className='card'>
        <div className="card__image">
          <img src={recipeImg} />
        </div>
        <div className="clearfix card__information">
            <h3 className="card__title">{recipeTitle}</h3>
            <p className='card__price'>{recipePrice}</p>
            <p className='card__desc'>{recipeDesc}</p>
            <button className='btn'>Order a delivery</button>
        </div>
    </div>
  )
}

export default Card