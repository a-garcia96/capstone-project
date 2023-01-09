import React from 'react'

const Card = ({ recipeTitle, recipePrice, recipeDesc, recipeImg }) => {
  return (
    <div className='card'>
        <div className="card__image">

        </div>
        <div className="card__information">
            <h3>{recipeTitle}</h3>
            <p>{recipePrice}</p>
            <p>{recipeDesc}</p>
            <button>Order a delivery</button>
        </div>
    </div>
  )
}

export default Card