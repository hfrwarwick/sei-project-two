import React, { useState, useEffect } from 'react'

import axios from 'axios'

//Components

import Navbar from '../Navbar'
import RecipeCard from './RecipeCard'

const RecipeIndex = () => {
  const [meals, setMeals] = useState(null)
  const [mealSearch, setMealSearch] = useState('')
  const [mealSubmit, setMealSubmit] = useState('')

  const key = '6e93d4a18ba146b3bce099dea72ec2a1'

  // 4b24846bd4904b128402cc82a9246202
  // 5e146c747a1b4458b5b724caad4b2cb6
  // 0f7f7da500a94e358bd2756e611c52fe

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${mealSearch}&number=50&apiKey=${key}`
      )
      setMeals(response.data)
    }
    getData()
  }, [mealSubmit])

  const handleChange = (event) => {
    const newSearch = event.target.value
    setMealSearch(newSearch)
  }

  const newRequest = (event) => {
    event.preventDefault()
    setMealSubmit(mealSearch)
  }

  return (
    <>
      <Navbar handleChange={handleChange} newRequest={newRequest} />
      <div className="columns">
        <div className="column sidebar-left is-one-fifth">
          <div className="side-content">
            <h2 className="instruction-title ">
              <b>Catagories</b>
            </h2>
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
