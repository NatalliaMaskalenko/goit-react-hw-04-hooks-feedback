import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
                               
<div className = {s.container}>
         {
            options.map(option => (
                <button
                    onClick={() => onLeaveFeedback(option)}
                    type="button"
                    className = {s.button}
                    key={shortid.generate()}
                    >
                        {option}
                    </button>
                ))
            }
</div>
)

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;