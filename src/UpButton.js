import React from 'react';
import './App.css';

class UpButton extends React.Component {
    render() {
        return (this.props.index === 0) ?
            (null)
            :
            (<button onClick={this.props.onClick}>
                <p><i className="arrow up"></i></p>
            </button>);
    }

}
export default UpButton;