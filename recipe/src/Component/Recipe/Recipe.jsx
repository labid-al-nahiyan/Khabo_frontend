import { checkPropTypes } from "prop-types";
import { Link, useLoaderData } from 'react-router-dom';
import './Recipe.css'
import UserFeedback from "../UserFeedback/UserFeedback";
import RecipeSteps from "../RecipeSteps/RecipeSteps";
import { useState } from "react";

export const recipeLoader = async ({ params }) => {
    const res = await fetch(`https://khabo.pythonanywhere.com/recipes/${params.id}`);
    const resJson = await res.json();
    console.log(resJson)
    return resJson;
  };

const Recipe = () => {
   const recipe = useLoaderData();
   const [clicked,setClicked] = useState(false);
   
    return (
        <div className="recipe-container">
            <div className="recipe">
            <div className="recipe-image">
                <img src={recipe.recipe_image} alt="" />
            </div>
            <div className="recipe-details">
                <div className="recipe-header">
                    <div className="recipe-title">
                        <h2>{recipe.title}</h2>
                    </div>
                    <div>
                        <p><small>Added by</small> <Link to='/user/id'>{recipe.user.username}</Link></p>
                    </div>
                </div>
                <div className="recipe-details-body">
                    <div className="recipe-details-description">
                        <p>{recipe.description}</p>
                        <h5>Ingredients needed : </h5>
                        <div className="recipe-ingredients">
                            
                            <ul>
                                {
                                    recipe.ingredients.map((ingredient,index)=>{
                                        return <li key={index}>{ingredient.quantity}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    
                    <div className="recipe-extra-info">
                        <div>
                            <div className="recipe-details-makingtime">
                                <p>
                                    Making time :<b> {recipe.making_time}</b>
                                </p>
                            </div>
                            <div className="recipe-details-ratings">
                            Rating : <b>{recipe.rating}</b>
                            </div>
                        </div>
                        <div className="recipe-details-stepsBtn">
                            {/* <Link to={`/recips/${recipe.id}/steps`}><button>Process to steps</button></Link> */}
                            <button onClick={()=>setClicked(true)}>Process to steps</button>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
            
            </div>
            <div className="recipe-show-steps" >
                {clicked&&<RecipeSteps id={recipe.id} steps={recipe.steps}></RecipeSteps>}
            </div>
            <div className="recipe-feedback">
                <UserFeedback feedbacks = {recipe.feedback}></UserFeedback>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: checkPropTypes.Object
}
export default Recipe;