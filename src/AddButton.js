import React from 'react';
import './App.css';

class AddButton extends React.Component{

  render() {
    return(
      <button className= "AddButton" onClick= {this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}

export default AddButton;

