import { checkPropTypes } from 'prop-types';
import './UserFeedback.css'
import SingleFeedback from '../SingleFeedback/SingleFeedback';

const UserFeedback = ({feedbacks}) => {
    console.log(feedbacks)
    return (
        <div className='recipe-feedback-container'>
            {
                feedbacks.map((feedback, index)=>{
                    <SingleFeedback key={index} feedback={feedback}></SingleFeedback>
                })
            }
        </div>
    );
};

UserFeedback.propTypes = {
    feedbacks: checkPropTypes.Array
}
export default UserFeedback;