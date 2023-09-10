import { checkPropTypes } from 'prop-types';
import './SingleFeedback.css'

const SingleFeedback = ({feedback}) => {
    console.log(feedback)
    
    return (
        <div>
            
        </div>
    );
};
SingleFeedback.propTypes = {
    feedback: checkPropTypes.list
}
export default SingleFeedback;