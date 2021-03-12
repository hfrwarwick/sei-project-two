import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar-nosearch'

const RecipeShow = () => {
  const params = useParams()

  const key = '6e93d4a18ba146b3bce099dea72ec2a1'

  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?&apiKey=${key}`
      )
      setRecipe(response.data)
    }
    getData()
  }, [])

  if (!recipe) return null

  const { image, summary, analyzedInstructions, extendedIngredients } = recipe

  function createMarkup() {
    return { __html: `${summary}` }
  }

  console.log()

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
                {analyzedInstructions[0].steps.map((step) => {
                  return (
                    <li className="instructions" key={step.number}>
                      <h2 className="step-number">
                        <b>Step {step.number}</b>
                      </h2>
                      {step.step}
                    </li>
                  )
                })}
                <button className="button start-button">Take me back</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default RecipeShow
