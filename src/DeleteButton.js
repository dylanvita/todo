import React from 'react';
import './App.css';

class DeleteButton extends React.Component {
    render() {
        return (
            <button className="DeleteButton" onClick={this.props.onClick}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i className="fa fa-trash-o"></i>
            </button>
        );
    }
}

export default DeleteButton;