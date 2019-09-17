import React from 'react';
import './ProgressBar.css';

function ProgressBar(props){
    function createBar(goal, progress) {
        const percentChecked = (progress / goal);
        
        if(percentChecked) {
            return <div style={{flex:percentChecked}} className="progress-box green"></div>
        }
    }

    return (
        <div className="progress-container">
            <div className="progress-bar">
                {createBar(props.goal, props.progress)}
            </div>
        </div>
    )
}

export default ProgressBar;