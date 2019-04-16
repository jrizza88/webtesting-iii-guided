import React, { Component } from 'react';
import './App.css';
import Speaker from './speaker/Speaker';

class App extends Component {
  state = {
    message: 'Nothing to say'
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload... if you dare, because the snappening is upon us!
            You press 'u' to update your changes if that is what you want!
          </p>
        </header> */}
        <Speaker message={this.state.message} speak={this.speak}/>
      </div>
    );
  }

  speak = () => {
    this.setState({ message: 'you are not mocking me!'})
  }
}

export default App;
