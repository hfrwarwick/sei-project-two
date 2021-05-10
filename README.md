<h1> Eatwell- GA Project Two </h1>

My second dev project for the Software Engineering Immersive course, a React app pair-coded with GA classmate Atilla Arslan in a 48-hour hackathon.
The app has been deployed with Netlify and is available here.

<h2> Brief: </h2>

Build a React application that consumes any public API

<h2> Timeframe: </h2>

48 hours.

<h2> Technologies used: </h2>

HTML5 <br>
CSS3 <br>
JavaScript (ES6) <br>
React <br>
Insomnia <br>
Bulma <br>
Git <br>
GitHub <br>
Adobe Fonts <br>
Google Chrome dev tools <br>
VS Code <br>
Eslint <br>
Spoontacular API <br>

<h2> Demonstration of the App Flow: </h2>


The Eatwell app begins with a start page. Pressing the button will lead the user to a recipe index filled with hundreds of recipes. There are filter buttons to the left, divided by cuisines and dietary. The cuisines are Chinese, Indian, Italian, British, Spanish and Mexican, selecting one will filter out all the desired recipes from that type of cuisine, selecting Italian will cause the index to show pizza and pasta for example. The user can filter the index more by selecting a dietary requirement: vegan, vegetarian, pescatarain and ketogenic, and this will show dishes that match that requirement. If the user wants to find a specific recipe, they can use the search bar located at the top. If they were to search for ‘burger’, all burger recipes from the API will appear. Selecting a recipe will lead the user to the recipe showpage. The page shows the full recipe, including description, ingredients, methos, cooking time and how many the recipe serves. Also located at the bottom are similar recipes. If the user would like to return to the index, there is a ‘Take me back’ button. Next to that button is a ‘Save recipe’ button but we weren't able to finish completing that function in the timeframe we had.

<h2>Approach</h2>

We started by prospecting free APIs on the Internet, and settled on a Spoontacular API that lists hundreds of thousands of recipes. After agreeing on this API, I began reading the documentation to help understand the different endpoints we need to gather data for our app, while my partner began building a wireframe in photoshop.
Styling

We decided to go with Bulma CSS Framework for some out-of-the-box styling to manage our time, and for the font, my partner found a perfect Google font to match the style he created in the wireframe. 

<h2> Requesting Data from the API </h2>

The first thing we needed to do was fetch the data from the API using a package called Axios and async/ await. The first challenge was learning how the spoonacular API worked. It has a lot of endpoints with many search parameters that you can chain onto the URI. Once we figured this out using the documentation and trial and error through Insomnia we could call the data within our app
```
useEffect(() => { const getData = async () => { const response = await axios.get( `https://api.spoonacular.com/recipes/complexSearch?query=${mealSearch}&cuisine=${cuisine}&diet=${diet}&number=50&apiKey=${key}` ) setMeals(response.data) } getData() }, [mealSubmit, cuisine, diet])
```

We could then set each parameter to state and make a new request when the state was updated and then set the result of the GET request to state.

<h2> Using the Data</h2>

Once the data had been set to state it was relatively easy to use the data and map through it to display easy of the recipes in a grid. This was done by passing the data through as props to the RecipeCard component and destructuring it on the other side.

To ensure the app would execute properly we had to add some conditional rendering to the JSX section mapping through the data to check if state returned true before attempting to map through the data.
```
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
                   <Link to={`/recipes/${meal.id}`}>
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
 
export default RecipeCard
```
<h2>Wins and Challenges</h2>

This project was a great opportunity to learn how to work in a pair and learn how to split up tasks. Despite only having recently learned React at this point I think the project was a success given we only had 48 hours.

Really impressed with the styling my partner did for this project but he said a challenge was to learn how to override the Bulma built in styling whilst retaining the built in responsive elements.

Learning the API took some time because of how complex it was, and had we had more time there were so many more capabilities we could have utilized for our app.

We had hoped to build a functional saved recipes section using local storage of recipe ID’s, however sadly we ran out of time to build the UI for this feature, despite the code to make it work is there

Overall it was a great experience working with API’s in React and learning how to split elements into Components to make cleaner code and better reusability.

<h2>Key Learnings</h2>

This project hugely added my knowledge about accessing and leveraging API endpoints. Also the project improved my technical communication massively: as we did a pair-coding remotely, any challenges, communication or otherwise, were a challenge to overcome, and we did just that.

