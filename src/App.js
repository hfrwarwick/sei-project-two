import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import RecipeIndex from './components/Recipes/RecipeIndex'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipes">
          <RecipeIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
