import { checkPropTypes } from "prop-types";
import './RecipeSingleStep.css'
const RecipeSingleStep = ({step,recipeid}) => {
    console.log(step)
    return (
        <div className="single-step-container">
            <div className="single-step-image">
                {(step.step_images.length==0)?"":<img src={step.step_images[0].image.image_path} alt="" />}
            </div>
            <div className="single-step-details">
                <h2>Step : {step.step_no}</h2>
                <p>{step.descriptions}</p>
            </div>
        </div>
    );
};

RecipeSingleStep.propTypes = {
    step: checkPropTypes.Array,
    recipeid : checkPropTypes.number
}
export default RecipeSingleStep;