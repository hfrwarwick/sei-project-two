import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar-nosearch'
import axios from 'axios'

const MyRecipes = () => {
  const [recipes, setRecipe] = useState('')
  const [recipeDisplay, setRecipeDisplay] = useState([])

  const key = '361d685ac8904161967c1545759b43eb'

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/informationBulk?ids=${recipes}&apiKey=${key}`
      )
      setRecipeDisplay(response.data)
    }

    getData()
  }, [])

  recipeDisplay.map((recipe) => {
    console.log(recipe)
  })

  console.log(recipes)

  function allStorage() {
    const values = []
    const keys = Object.keys(localStorage)

    let i = keys.length

    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }

    setRecipe(values)
  }

  useEffect(() => {
    allStorage()
  }, [])

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default MyRecipes
