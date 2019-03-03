import React, { Component } from "react";

export class Example2Before extends Component {
  state = { name: "" };

  alertName = () => {
   alert(this.state.name); 
  }

  handleNameInput = event => {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
        <h3>This is a Class Component</h3>
        <input type="text" onChange={this.handleNameInput} value={this.state.name} placeholder="Your name..."/>
        <button onClick={this.alertName} className="btn btn-primary">Alert</button>
      </div>
    );
  }
}

export default Example2Before;
