import React from 'react'

const RecipeCard = ({ meals }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          {meals && (
            <div className="columns is-multiline">
              {meals.results.map((meal) => {
                return (
                  <div
                    key={meal.id}
                    className="column is-one-quarter-desktop is-one-third-tablet"
                  >
                    <div className="card">
                      <div className="card-image ">
                        <figure className="image resize image-is-1by1">
                          <img src={meal.image} alt={meal.title} />
                        </figure>
                      </div>
                      <div className="card-header ">
                        <div className="card-header-title">{meal.title}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default RecipeCard
