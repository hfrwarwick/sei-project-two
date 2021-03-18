import React from 'react'
require('dotenv').config()
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import RecipeIndex from './components/Recipes/RecipeIndex'
import RecipeShow from './components/Recipes/RecipeShow.js'
import MyRecipes from './components/Recipes/MyRecipes'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipes/MyRecipes">
          <MyRecipes />
        </Route>
        <Route path="/recipes/:id">
          <RecipeShow />
        </Route>
        <Route path="/recipes">
          <RecipeIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
