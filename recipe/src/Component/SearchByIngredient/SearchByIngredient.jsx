import './SearchByIngredient.css'

import SelectIngredients from '../SelectIngredients/SelectIngredients';
import ShowRecipe from '../ShowRecipe/ShowRecipe';
import { useEffect, useState } from 'react';
import axios from 'axios';


function SearchByIngredient() {
    
  const [ingredients, setIngredients] = useState(["Egg","Beef"]);
  const [recipes, setRecipe] = useState([]);


  useEffect(
    function onChange() {
       console.log("parent")
       const dataToSend = ["turmeric","Salt"];
       axios.post("https://khabo.pythonanywhere.com/recipes/search_by_ingredients/",
       {
        ingredients:dataToSend
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
          
          <SelectIngredients setIngredients={setIngredients}></SelectIngredients>
        </div>
      </div>
      <ShowRecipe recipes={recipes}></ShowRecipe>
    </div>
    
  );
}

export default SearchByIngredient;
