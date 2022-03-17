import React, { useState } from "react";
import Axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import "./RecipesList.css";
import SearchInput from "./SearchInput";

function RecipesList() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
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
      <SearchInput valueChange={onTextChange} />
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
                        <tr>
                          <th>Ingredient</th>
                          <th>Weight</th>
                        </tr>
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

export default RecipesList;
