import React, { Component } from "react";
import War from "./War";
import Home from "./Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dragons: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/dragons")
      .then(resp => resp.json())
      .then(dragons => {
        this.setState({ dragons: dragons });
      });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Home dragons={this.state.dragons} />
        <War />
      </div>
    );
  }
}

export default App;
