import React, { Component } from "react";
import Example3Before from "../src/components/Scenario3/Example3Before";
import Example5CustomHook from "./components/Scenario5/Example5CustomHook";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Example3Before />
      </div>
    );
  }
}

export default App;
