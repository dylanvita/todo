import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AllLists from './AllLists';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header
          className="App-header">
          <p key="toDo">To do</p>
        <AllLists/>
        </header>
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App; 