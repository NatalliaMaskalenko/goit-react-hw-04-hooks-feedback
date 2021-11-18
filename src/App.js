import { useState } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

export default function App (){
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleIncrement = (option) => {
        switch (option) {
            case 'good':
                setGood(prevGood => prevGood + 1);
                break;

            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;

            case 'bad':
                setBad(prevBad => prevBad + 1);
                break;

            default:
                console.log('Invalid subscription type');
        }
    };

    const countTotalFeedbacks = () =>
        good + neutral + bad;
    
    const countPositiveFeedbackPercentage = (countTotalFeedbacks) =>
        Math.round((good / countTotalFeedbacks) * 100);

    return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleIncrement}/>
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedbacks}
                        positivePercentage={countPositiveFeedbackPercentage} />
                </Section>
            </>
        );
};