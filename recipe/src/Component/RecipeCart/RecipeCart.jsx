import { checkPropTypes } from "prop-types";
import './RecipeCart.css'
import { Link } from "react-router-dom";

const RecipeCart = (props) => {
    console.log(props.recipe)
    const recipe = props.recipe
    
    return (
        <div className="single_recipeCart">
           <div className="single_recipeCart_img">
                <img src={recipe.recipe_image} alt="recipe Image"/>
           </div>
           <div className="single_recipeCart_description">
                <div className="recipeCart_header">
                    <h3>{recipe.title}</h3>
                </div>
                <div className="recipeCart_proc">
                    <p>{recipe.description} <span className="cart_readMore"><Link to={`/recips/${recipe.id}`}>Read more..</Link></span></p>
                </div>
           </div>
        </div>
    );
};
RecipeCart.propTypes = {
    recipe: checkPropTypes.list
}
export default RecipeCart;