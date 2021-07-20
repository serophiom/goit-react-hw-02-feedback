import React from 'react';
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
            <div className="feedback">
              <h2>Please leave feedback</h2>
              <div className="Feedback__controls">
                <button type="button" onClick={this.countIncrementGood}>Good</button>
                <button type="button" onClick={this.countIncrementNeutral}>Neutral</button> 
                <button type="button" onClick={this.countIncrementBad}>Bad</button>  
              </div>
              <p>Statistics</p>
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
              <p>Total: {this.state.total}</p>
              <p>Positive feedback: {this.state.positive}%</p>
            </div>
            

        )
    }
}

export default Feedback;