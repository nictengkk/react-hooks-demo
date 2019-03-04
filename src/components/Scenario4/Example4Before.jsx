import React, { Component } from "react";

export class Example4Before extends Component {
  timerId= 0;
  state = { userName: "JD", firstName: "John", lastName: "Doe" };

  componentDidMount() {
    this.timerId = setInterval(() => {
      console.log("Timer is running")
      this.setState({
        username: "MJ",
        firstName: "Mary",
        lastName: "Jane"
      });
    }, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

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
        <h3>This is a Class component</h3>
        <h4> The text fields will update in 5 seconds </h4>
        <input type="text" onChange={this.handleUserNameInput} value={userName} />
        <input type="text" onChange={this.handleFirstNameInput} value={firstName} />
        <input type="text" onChange={this.handleLastNameInput} value={lastName} />
      </div>
    );
  }
}

export default Example4Before;
