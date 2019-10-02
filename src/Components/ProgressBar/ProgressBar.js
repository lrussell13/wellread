import React from 'react';
import {withRouter} from 'react-router-dom';
import './ProgressBar.css';

class ProgressBar extends React.Component {
    createBar(goal, progress) {
        const percentChecked = (progress / goal);
    
        if(percentChecked) {
            return <div style={{flex:percentChecked}} className="progress-box green"></div>
        }
    }

    render(){
        return (
            <div className="progress-container">
                <div className="progress-bar">
                    {this.createBar(this.props.goal, this.props.progress)}
                </div>
            </div>
        )
    }
}

export default withRouter(ProgressBar);