import React from 'react'
import { Link } from 'react-router-dom'

import sideImage from '../assets/food-illustration.png'
//import RecipeIndex from './Recipes/RecipeIndex'

function Home() {
  return (
    <>
      <section className="hero homepage is-fullheight">
        <section className="content-container index">
          <header className=" logo ">eatwell</header>
          <div className="columns down">
            <div className="column is-two-thirds">
              <h1 className="cta">Your favourite recipes, made by YOU,</h1>
              <h1 className="cta-two">
                Monday to Sunday with our recipe & meal plan APP
              </h1>
              <h4 className="cta-three">
                Click to get started and search for meals for the meal planner
              </h4>
              <Link to="/recipes" className="button start-button is-medium">
                Get Started
              </Link>
            </div>
            <div className="column ">
              <img className="make-larger" src={sideImage}></img>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Home
