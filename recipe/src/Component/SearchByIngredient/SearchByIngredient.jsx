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
        <div className='searchByIngredient-left'>
        </div>
        <div className='searchByIngredient-right slide-in'>
          <div style={{textAlign:'start',height:'100px',paddingLeft:'160px'}}>
            <h1 style={{marginBottom:0}}><strong>Give</strong> </h1>
            <h1 style={{margin:0}}><strong>Ingredients:</strong></h1>
          </div>
          <div style={{textAlign:'start',marginLeft:'24%'}}>

                <h5 style={{color:'#1a1a1a'}}>Add the ingredients for which you want your recipe based on</h5>

          </div>
          <SelectIngredients setIngredients={setIngredients} ingredients = {availableIngredients}></SelectIngredients>
        </div>
      </div>
      <ShowRecipe recipes={recipes}></ShowRecipe>
    </div>
    
  );
}

export default SearchByIngredient;
