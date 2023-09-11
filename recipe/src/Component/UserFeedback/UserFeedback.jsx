import { checkPropTypes } from 'prop-types';
import './UserFeedback.css'
import SingleFeedback from '../SingleFeedback/SingleFeedback';

const UserFeedback = ({feedbacks}) => {
    console.log("feedbacks",feedbacks)
    
    return (
        <div className='recipe-feedback-container'>
            <div style={{marginLeft:'15px'}}>
                <h2>Feedbacks</h2>
            </div>
            <div className='post-feedback'>
                <textarea placeholder='Give your feedback'></textarea>
                <div className='post-feedback-btn'>
                    <button>Post</button>
                </div>
                
            </div>
            <div>
            {
                feedbacks.map((feedback, index)=>{
                  return  <SingleFeedback key={index} feedback={feedback}></SingleFeedback>
                })
                
            }
            </div>
        </div>
    );
};

UserFeedback.propTypes = {
    feedbacks: checkPropTypes.Array
}
export default UserFeedback;