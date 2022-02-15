import React, { useState } from "react";
import Axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import "./RecipeApi.css";

const APP_ID = "8f8d0bea";
const APP_KEY = "ddd004d50edd6831b8667fd05471ccc9";

function RecipeApi() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    // updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  const [show, setShow] = useState("");

  return (
    <div>
      <div className="search">
        <img className="search-icon" src="/search-icon.svg" alt=" " />
        <input
          className="search-input"
          placeholder="Search Recipe"
          onChange={onTextChange}
        />
      </div>
      <div>
        <div className="recipe-list-container">
          {recipeList?.length &&
            recipeList.map((recipeObj, index) => (
              <div key={index} className="recipe-container">
                <Dialog aria-labelledby="simple-dialog-title" open={!!show}>
                  <DialogTitle>Ingredients</DialogTitle>
                  <DialogContent>
                    <span className="recipe-name">
                      {recipeObj.recipe.label}
                    </span>
                    <table>
                      <thead>
                        <th>Ingredient</th>
                        <th>Weight</th>
                      </thead>
                      <tbody>
                        {recipeObj.recipe.ingredients.map(
                          (ingredient, index) => (
                            <tr key={index} className="ingredient-list">
                              <td>{ingredient.text}</td>
                              <td>{ingredient.weight}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </DialogContent>
                  <DialogActions>
                    <span
                      className="see-new-tab"
                      onClick={() => window.open(recipeObj.recipe.url)}
                    >
                      See More
                    </span>
                    <span className="see-more-text" onClick={() => setShow("")}>
                      Close
                    </span>
                  </DialogActions>
                </Dialog>
                <img
                  className="cover-image"
                  src={recipeObj.recipe.image}
                  alt={recipeObj.recipe.label}
                ></img>
                <span className="recipe-name">{recipeObj.recipe.label}</span>
                <span
                  className="ingredients-text"
                  onClick={() => setShow(!show)}
                >
                  Ingredients
                </span>
                <span
                  className="see-more-text"
                  onClick={() => window.open(recipeObj.recipe.url)}
                >
                  See Complete Recipe
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeApi;
