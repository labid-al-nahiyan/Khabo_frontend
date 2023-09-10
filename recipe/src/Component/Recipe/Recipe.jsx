import { checkPropTypes } from "prop-types";
import { Link, useLoaderData } from 'react-router-dom';
import './Recipe.css'

export const recipeLoader = async ({ params }) => {
    console.log("param : "+params.id);
    const res = await fetch(`https://khabo.pythonanywhere.com/recipes/${params.id}`);
    const resJson = await res.json();
  
    return resJson;
  };

const Recipe = () => {
   const recipe = useLoaderData();
   console.log(recipe)
   
    return (
        <div className="recipe-container">
            <div className="recipe">
            <div className="recipe-image">
                <img src={recipe.recipe_image} alt="" />
            </div>
            <div className="recipe-details">
                <div className="recipe-header">
                    <div className="recipe-title">
                        <h4>{recipe.title}</h4>
                    </div>
                    <div>
                        <h5><Link to='/user/id'>{recipe.user.username}</Link></h5>
                    </div>
                </div>
                <div className="recipe-details-body">
                    <div className="recipe-details-description">
                        <p>{recipe.description}</p>
                    </div>
                    <div className="recipe-details-makingtime">
                        <p>
                            making time : {recipe.making_time}
                        </p>
                    </div>
                    <div className="recipe-details-ratings">
                       rating : {recipe.rating}
                    </div>
                    <div className="recipe-details-stepsBtn">
                        <button>Process to steps</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="recipe-feedback">

            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: checkPropTypes.list
}
export default Recipe;