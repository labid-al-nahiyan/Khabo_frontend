import { checkPropTypes } from "prop-types";
import './RecipeCart.css'

const RecipeCart = (props) => {
    console.log(props.recipe)
    const recipe = props.recipe
    
    return (
        <div className="single_recipeCart">
           <div className="single_recipeCart_img">
                <img src={recipe.imageLink} alt="recipe Image" />
           </div>
           <div className="single_recipeCart_description">
                <div className="recipeCart_header">
                    <h3>{recipe.name}</h3>
                </div>
                <div className="recipeCart_proc">
                    <p>{recipe.procedure} <span className="cart_readMore">Read more..</span></p>
                </div>
           </div>
        </div>
    );
};
RecipeCart.propTypes = {
    recipe: checkPropTypes.list
}
export default RecipeCart;