import React, { Component } from "react";

export class Example1Before extends Component {
  alertName = () => {
    alert("John Doe");
  };

  render() {
    return (
      <div>
        <h3>This is a Class Component</h3>
        <button onClick={this.alertName} className="btn btn-primary">
          Alert
        </button>
      </div>
    );
  }
}

export default Example1Before;
