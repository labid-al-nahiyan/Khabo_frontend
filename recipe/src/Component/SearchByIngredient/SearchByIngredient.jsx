import './SearchByIngredient.css'

import SelectIngredients from '../SelectIngredients/SelectIngredients';
import ShowRecipe from '../ShowRecipe/ShowRecipe';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

export const ingredientsLoader = async () => {
  const res = await fetch(`https://khabo.pythonanywhere.com/ingredients`);
  const resJson = await res.json();
  console.log(resJson)
  return resJson;
};

function SearchByIngredient() {
    
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipe] = useState([]);
  const availableIngredients = useLoaderData();

  useEffect(
    function onChange() {
       console.log("parent")
       axios.post("https://khabo.pythonanywhere.com/recipes/search_by_ingredients/",
       {
        ingredients:ingredients
       })
        .then((response) => {
          console.log(response.data);
          setRecipe(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
       
    },
    [ingredients]
  )


  return (
    <div>
      <div className='searchByIngredientContainer'>
        <div>

        </div>
        <div>
          <div style={{textAlign:'start',height:'60px',paddingLeft:'160px'}}>
            <h1 style={{marginBottom:0}}>Give </h1>
            <h1 style={{margin:0}}>Ingredients:</h1>
          </div>
          
          <SelectIngredients setIngredients={setIngredients} ingredients = {availableIngredients}></SelectIngredients>
        </div>
      </div>
      <ShowRecipe recipes={recipes}></ShowRecipe>
    </div>
    
  );
}

export default SearchByIngredient;
