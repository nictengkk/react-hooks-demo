//to convert componentDidMount and componentWillUnmount using hooks, must import useEffect
import React, { useState, useEffect } from "react";

function Example4After() {
  const [userName, setUsername] = useState("JD");
  const [firstName, setFirstname] = useState("John");
  const [lastName, setLastname] = useState("Doe");

  //a replica of componentDidMount and MUST return componentWillUnmount through creation of arrow function clearInterval
  useEffect(() => {
    const timer = setInterval(() => {
      setUsername("MJ");
      setFirstname("Mary");
      setLastname("Jane");
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  });

  const handleUserNameInput = e => {
    setUsername({ userName: e.target.value });
  };
  const handleFirstNameInput = e => {
    setFirstname({ firstName: e.target.value });
  };
  const handleLastNameInput = e => {
    setFirstname({ lastName: e.target.value });
  };

  return (
    <div>
      <h3>This is a Functional Component</h3>
      <h4> The text fields will update in 5 seconds </h4>
      <input type="text" onChange={handleUserNameInput} value={userName} />
      <input type="text" onChange={handleFirstNameInput} value={firstName} />
      <input type="text" onChange={handleLastNameInput} value={lastName} />
    </div>
  );
}

export default Example4After;
