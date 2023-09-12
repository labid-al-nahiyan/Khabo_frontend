import { checkPropTypes } from 'prop-types';
import './UserFeedback.css'
import SingleFeedback from '../SingleFeedback/SingleFeedback';
import { useState } from 'react';
import axios from 'axios';

const UserFeedback = ({recipe}) => {
    console.log("feedbacks",recipe)
    const [rating, setRating] = useState("");
    const [feedback, setFeedback] = useState("");
  
    // Handle textarea change and update the description state
    const handlRating = (event) => {
        setRating((event.target.value).toStrint());
    };
    const handleFeedBack = (event) => {
        setFeedback(event.target.value);
    };

    const giveFeedback=()=>{
        console.log(rating," ",feedback);
        // Make a GET request to retrieve the CSRF token from your Django backend.
        axios.get('https://khabo.pythonanywhere.com/csrf-token/')
            .then((response) => {
                    const csrfToken = response.data.csrfToken;

                    // Include the CSRF token in the headers of your POST request.
        axios.post(`https://khabo.pythonanywhere.com/recipes/${recipe.id}/feedback/`, {
            rating: rating,
            review_text: feedback,
        }, {
        headers: {
            'X-CSRFToken': csrfToken, // Include the CSRF token here
        },
    })
    .then((response) => {
    // Handle the response from the POST request.
    console.log(response)
    })
    .catch((error) => {
    // Handle errors
    });
})
.catch((error) => {
  // Handle errors
});

    };

    return (
        <div className='recipe-feedback-container'>
            <div style={{marginLeft:'15px'}}>
                <h2>Feedbacks</h2>
            </div>
            <div style={{marginLeft:'20px'}}>
                <label style={{marginRight:'15px'}}><b>Rating:</b></label>
                <input type='number' min="1" max="5"                             
                            value={rating} // Bind the value to the state
                            onChange={handlRating}></input>
            </div>
            <div className='post-feedback'>
                <textarea className='feedbacktext' placeholder='Give your feedback' 
                            value={feedback} // Bind the value to the state
                            onChange={handleFeedBack} ></textarea>
                <div className='post-feedback-btn'>
                    <button onClick={giveFeedback}>Post</button>
                </div>
                
            </div>
            <div>
            {
                recipe.feedback.map((feedback, index)=>{
                  return  <SingleFeedback key={index} feedback={feedback}></SingleFeedback>
                })
                
            }
            </div>
        </div>
    );
};

UserFeedback.propTypes = {
    recipe: checkPropTypes.Array
}
export default UserFeedback;