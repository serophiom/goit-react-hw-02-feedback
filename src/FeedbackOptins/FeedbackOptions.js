import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (
    <div className="Feedback__controls">
        <button type="button" onClick={onIncrementGood}>Good</button>
        <button type="button" onClick={onIncrementNeutral}>Neutral</button> 
        <button type="button" onClick={onIncrementBad}>Bad</button>  
    </div>
);

Statistics.propTypes = {
    onIncrementGood: PropTypes.func.isRequired,
    onIncrementNeutral: PropTypes.func.isRequired,
    onIncrementBad: PropTypes.func.isRequired
}

export default FeedbackOptions;
