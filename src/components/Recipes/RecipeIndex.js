import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Components

import Navbar from '../Navbar'
import RecipeCard from './RecipeCard'

const RecipeIndex = () => {
  const [meals, setMeals] = useState(null)
  const [mealSearch, setMealSearch] = useState('')
  const [mealSubmit, setMealSubmit] = useState('')

  const key = '5e146c747a1b4458b5b724caad4b2cb6'

  //'5e146c747a1b4458b5b724caad4b2cb6'

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
      <RecipeCard meals={meals} />
    </>
  )
}
export default RecipeIndex
