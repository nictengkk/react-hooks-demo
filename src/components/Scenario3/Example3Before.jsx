import React, { Component } from "react";

export class Example3Before extends Component {
  state = { userName: "", firstName: "", lastName: "" };

  logName = () => {
    const { userName, firstName, lastName } = this.state;
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
  };

  handleUserNameInput = e => {
    this.setState({ userName: e.target.value });
  };

  handleFirstNameInput = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameInput = e => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    const { userName, firstName, lastName } = this.state;

    return (
      <div>
        <h3> This is a Class Component </h3>

        <input
          type="text"
          onChange={this.handleUserNameInput}
          value={userName}
          placeholder="username..."
        />
        <input
          type="text"
          onChange={this.handleFirstNameInput}
          value={firstName}
          placeholder="firstname..."
        />
        <input
          type="text"
          onChange={this.handleLastNameInput}
          value={lastName}
          placeholder="lastname..."
        />
        <button className="btn btn-primary" onClick={this.logName}>
          Log Names
        </button>
      </div>
    );
  }
}

export default Example3Before;
