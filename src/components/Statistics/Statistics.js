import PropTypes from 'prop-types';
import Notification from '../Notification/';
import s from './Statistics.module.css'


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {total() > 0 ? (
                <>
                    <p style={{ color: randomColor() }}>Good: {good}</p>
                    <p style={{ color: randomColor() }}>Neutral: {neutral}</p>
                    <p style={{ color: randomColor() }}>Bad: {bad}</p>
                    <p style={{ color: randomColor() }}>Total: {total()}</p>
                    <p style={{ color: randomColor() }}>
                        Positive feedbacks: {positivePercentage(total())} %
                    </p>
                </>
            ) : (
                <Notification />
            )}
        </>
    );
};


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    countTotalFeedbacks: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func,
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
    return `rgb(${randomIntegerFromInterval(0, 255)}, 
              ${randomIntegerFromInterval(0, 255)},
              ${randomIntegerFromInterval(0, 255)})`;
}
export default Statistics;