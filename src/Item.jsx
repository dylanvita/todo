import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Item extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isClicked: false,
      taskName: "",
      index: this.props.index,
    };
  }

  handleClick() {
    this.setState({isClicked: !this.state.isClicked});
  }

  handleChange() {
    this.props.onChange(this.state.index,document.getElementById("taskInput" + this.props.taskName).value);
  }

  render() {
    let button;
    button = <CompletionButton isClicked={this.state.isClicked} onClick={this.handleClick} />;

    return (
      <div>
        {button}
        <input class="input2" type="text" id = {"taskInput" + this.props.taskName} defaultValue={this.props.taskName}
         onChange={this.handleChange}/>
      </div>
    );
  }
}

function CompletionButton(props) {
    let displaybox = "";
    if(props.isClicked){
      displaybox = "X";
    } else {
      displaybox = "O";
    }
    return (
      <>
      <button class = "CompletionButton" onClick={props.onClick}>
        {displaybox}
      </button>
      </>
    );
  }
  

ReactDOM.render(
  <Item />,
  document.getElementById('root')
);

export default Item; 