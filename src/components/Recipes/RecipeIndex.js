import React, { useState, useEffect } from 'react'

import axios from 'axios'

//Components

import Navbar from '../Navbar'
import RecipeCard from './RecipeCard'

const RecipeIndex = () => {
  const [meals, setMeals] = useState(null)
  const [mealSearch, setMealSearch] = useState('')
  const [mealSubmit, setMealSubmit] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [diet, setDiet] = useState('')

  const key = '5471ecd2247e4588a529bc4a2b109a3a'

  console.log(key)

  // 4b24846bd4904b128402cc82a9246202
  // 5e146c747a1b4458b5b724caad4b2cb6
  // 0f7f7da500a94e358bd2756e611c52fe
  // f8e5d17b98dd476f9af939613a890fa8

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${mealSearch}&cuisine=${cuisine}&diet=${diet}&number=50&apiKey=${key}`
      )
      setMeals(response.data)
    }
    getData()
  }, [mealSubmit, cuisine, diet])

  const handleChange = (event) => {
    const newSearch = event.target.value
    setMealSearch(newSearch)
  }

  const newRequest = (event) => {
    event.preventDefault()
    setMealSubmit(mealSearch)
  }

  const handleCatagory = (event) => {
    const newFilter = event.target.value
    setCuisine(newFilter)
  }

  const handleDiet = (event) => {
    const newFilter = event.target.value
    setDiet(newFilter)
  }

  return (
    <>
      <Navbar handleChange={handleChange} newRequest={newRequest} />
      <div className="columns">
        <div className="column sidebar-left is-one-fifth">
          <div className="side-content">
            <h2 className="instruction-title down">
              <b>Catagories</b>
            </h2>

            <ul>
              <hr />
              <h4 className="space">Cuisines</h4>
              <button
                className="cata-button"
                onClick={handleCatagory}
                value="Chinese"
              >
                Chinese
              </button>
              <button
                className="cata-button"
                onClick={handleCatagory}
                value="Indian"
              >
                Indian
              </button>
              <button
                className="cata-button"
                onClick={handleCatagory}
                value="Italian"
              >
                Italian
              </button>
              <button
                className="cata-button"
                onClick={handleCatagory}
                value="British"
              >
                British
              </button>
              <button
                className="cata-button"
                onClick={handleCatagory}
                value="Spanish"
              >
                Spanish
              </button>
              <button
                className="cata-button"
                onClick={handleCatagory}
                value="Mexican"
              >
                Mexican
              </button>
            </ul>
            <hr />
            <ul>
              <h4 className="space">Dietry</h4>
              <button
                className="cata-button"
                onClick={handleDiet}
                value="Vegan"
              >
                Vegan
              </button>
              <button
                className="cata-button"
                onClick={handleDiet}
                value="Vegetarian"
              >
                Vegetarian
              </button>
              <button
                className="cata-button"
                onClick={handleDiet}
                value="Pescetarian"
              >
                Pescetarian
              </button>
              <button
                className="cata-button"
                onClick={handleDiet}
                value="Ketogenic"
              >
                Ketogenic
              </button>
            </ul>

            <hr />
          </div>
        </div>
        <div className="column is-three-quarters">
          <RecipeCard meals={meals} />
        </div>
      </div>
    </>
  )
}
export default RecipeIndex
