import React, { useState } from "react";

function Example2After() {
  //name here is this.state.name
  //setName is the handler, naming convention follows set + n(N)ame. this function is the same as setState.
  //destructuring array
  const [name, setName] = useState("John Doe");


  //name === this.state.name

  const alertName = () => {
    alert(name);
  };

  //setName = this.setState({name: newValue})
  const handleNameInput = event => {
    setName(event.target.value);
  };

  return (
    <div>
      <h3>This is a Functional Component</h3>
      <input
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Your name..."
      />
      <button onClick={alertName} className="btn btn-primary">
        Alert
      </button>
    </div>
  );
}

export default Example2After;
