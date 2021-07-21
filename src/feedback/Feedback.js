import React from 'react';
import Statistics from '../Statistics/Statistics';
import FeedBackOptions from '../FeedbackOptins/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import './Feedback.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positive: 0
    };

    countIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    countIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    countIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    countTotalFeedback = () => {
        this.setState(prevState => ({
            total: prevState.total + 1,
        }));
    };

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => ({
            positive: Math.round(prevState.good / prevState.total * 100),
        }));
    };

    render() {
        return (
            <>
            <Section title="Please leave feedback">
                <FeedBackOptions
                onIncrementGood={this.countIncrementGood}
                onIncrementNeutral={this.countIncrementNeutral}
                onIncrementBad={this.countIncrementBad}
                />
            </Section>

            <Section title="Statistics">
                {this.state.total ? (
                    <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.state.total}
                    positivePercentage={this.state.positive}
                />
                ) : null}
            </Section>
            {this.state.total ? null : <Notification message="No feedback given" />}
            </>
        );
    }
}

export default Feedback;