import React from 'react';
import './App.css';

class DownButton extends React.Component {
    render() {
        return (this.props.index === this.props.totalItems - 1) ?
        (null)
        :
        (<button onClick={this.props.onClick}>
            <p><i className="arrow down"></i></p>
        </button>);
    }

}
export default DownButton;