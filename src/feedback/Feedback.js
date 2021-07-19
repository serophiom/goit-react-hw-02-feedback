import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
    render() {
        return (
            <div className="feedback">
              <h2>Please leave feedback</h2>

              <button type="button">Good:</button>
              <button type="button">Neutral:</button> 
              <button type="button">Bad:</button>  
            </div>
            

        )
    }
}

export default Feedback;