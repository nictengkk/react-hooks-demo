import React, { Component } from "react";

export class Example5Before extends Component {
  state = {
    header: "Welcome to React Hooks"
  };

  componentDidMount() {
    console.log("Mounting")
    const newHeader = document.querySelectorAll("#header")[0];
    newHeader.innerHTML = this.state.header;
  }

  componentDidUpdate() {
    console.log("Updating")
    const newheader = document.querySelectorAll("#header")[0];
    newheader.innerHTML = this.state.header;
  }

  handleHeaderInput = e => {
    this.setState({ header: e.target.value });
  };

  render() {
    const { header } = this.state;
    return (
      <div>
        <h3 id="header"> This is a Class Component </h3>
        <input type="text" onChange={this.handleHeaderInput} value={header} />
      </div>
    );
  }
}

export default Example5Before;
