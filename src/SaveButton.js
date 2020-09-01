import React from 'react';
import './App.css';

class SaveButton extends React.Component{

  render() {
    return(
      <button className= "AddButton" onClick= {this.props.onClick}>
        Save
      </button>
    );
  }
}

export default SaveButton;
