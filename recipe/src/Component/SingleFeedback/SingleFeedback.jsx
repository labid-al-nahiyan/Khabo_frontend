import { checkPropTypes } from 'prop-types';
import './SingleFeedback.css'

const SingleFeedback = ({feedback}) => {
    console.log("feedback")

    return (
        <div className='single-feedback-container'>
            <div className='feedback-user'>
                <div className='feedback-user-img'>
                    <img src={feedback.user.image_path}></img>
                </div>
                <div className='feedback-user-info'>
                    <div className='feedback-user-name'>
                        <p>
                            {feedback.user.username}
                        </p>
                    </div>
                    <div className='feedback-user-email'>
                        <p>
                            {feedback.user.email}
                        </p>
                    </div>
                </div>
            </div>
            <div className='feedback-body'>
                <p>{feedback.review_text}</p>
            </div>
        </div>
    );
};
SingleFeedback.propTypes = {
    feedback: checkPropTypes.list
}
export default SingleFeedback;