import './SearchByIngredient.css'

import SelectIngredients from '../SelectIngredients/SelectIngredients';
import ShowRecipe from '../ShowRecipe/ShowRecipe';

function SearchByIngredient() {
    

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
          
          <SelectIngredients></SelectIngredients>
        </div>
      </div>
      <ShowRecipe></ShowRecipe>
    </div>
    
  );
}

export default SearchByIngredient;
