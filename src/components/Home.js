import React, { Component } from "react";
import War from "./War";

class Home extends Component {
  render() {
    // Note how style attributes are now passed as object instead of a string!!!
    return (
      <div
        style={{
          float: "left",
          width: "40%",
          padding: "5%",
          backgroundColor: "#00ffd8"
        }}
      >
        <h1>Home</h1>
        {this.props.dragons.map(dragon => {
          return (
            <div>
              <p>{dragon.name}</p>
              <img src={dragon.image} width="200" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
