import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar-nosearch'

const RecipeShow = () => {
  const params = useParams()

  const key = '5471ecd2247e4588a529bc4a2b109a3a'

  const [recipe, setRecipe] = useState(null)

  const [similarRecipe, setSimilarRecipe] = useState(null)

  // const location = useLocation()

  const getData = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${params.id}/information?&apiKey=${key}`
    )
    setRecipe(response.data)
  }

  useEffect(() => {
    getData()
    window.scrollTop
  }, [params.id])

  const getSimilarData = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${params.id}/similar?&number=8&apiKey=${key}`
    )
    setSimilarRecipe(response.data)
  }

  useEffect(() => {
    getSimilarData()
  }, [params.id])

  if (!recipe) return null

  //prettier-ignore
  const {
    image,
    summary,
    analyzedInstructions,
    extendedIngredients,
    instructions,
  } = recipe

  function createMarkup() {
    return { __html: `${summary}` }
  }

  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <div>
            <h2 className="title food-title has-text-centered">
              {recipe.title}
            </h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={image} alt="" />
                </figure>
                <div className="ingredient-box">
                  <h4 className="title instruction-title is-4">Ingredients</h4>
                  <hr />
                  {extendedIngredients.map((ingredient) => {
                    return (
                      <li key={ingredient.name}>{ingredient.originalString}</li>
                    )
                  })}
                </div>
              </div>
              <div className="column is-half">
                <h4 className="title instruction-title is-4">Summary</h4>
                <hr />
                <h4>
                  {' '}
                  Ready in <b>{recipe.readyInMinutes}</b> mins
                </h4>
                <hr />
                <h4>
                  {' '}
                  Serves <b>{recipe.servings}</b>
                </h4>
                <hr />
                <div dangerouslySetInnerHTML={createMarkup()}></div>
                <br></br>
                <h2 className="title instruction-title is-4">Instructions</h2>
                <hr />

                {analyzedInstructions[0] ? (
                  analyzedInstructions[0].steps.map((step) => {
                    return (
                      <li className="instructions" key={step.number}>
                        <h2 className="step-number">
                          <b>Step {step.number}</b>
                        </h2>
                        {step.step}
                      </li>
                    )
                  })
                ) : (
                  <p>{instructions}</p>
                )}

                <Link to="/recipes">
                  <button className="button back-button">Take me back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section">
        <div className="container">
          <h2 className="title instruction-title is-4">Similar Recipes</h2>
          <hr />
          {similarRecipe && (
            <div className="columns is-multiline">
              {similarRecipe.map((meal) => {
                return (
                  <div
                    key={meal.id}
                    className="column is-one-quarter-desktop is-one-third-tablet"
                  >
                    <Link to={`/recipes/${meal.id}`}>
                      <div className="card">
                        {/* <div className="card-image ">
                          <figure className="image resize image-is-1by1">
                            <img src={meal.sourceUrl} alt={meal.title} />
                          </figure>
                        </div> */}
                        <div className="card-header ">
                          <div className="card-header-title">{meal.title}</div>
                        </div>
                      </div>
                    </Link>
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
export default RecipeShow
