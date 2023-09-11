import RecipeCart from '../RecipeCart/RecipeCart';
import { checkPropTypes } from "prop-types";
import './ShowRecipe.css'

const ShowRecipe = ({recipes}) => {
    
    
    
    return (
       <div>
        {(recipes.length>0)&&<div className="recipes-container">
            <h1>All Recipes</h1>
            <div className='recipe_cartContainer'>
            {
                recipes.map((recipe,index)=>{
                    return <RecipeCart key={index} recipe={recipe}></RecipeCart>
                })
            }
            </div>
        </div>
       } 
       </div>
    );
};
ShowRecipe.propTypes = {
  recipes: checkPropTypes.Array
}

export default ShowRecipe;