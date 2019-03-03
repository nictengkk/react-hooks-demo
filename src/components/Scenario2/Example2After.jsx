import React, { useState } from "react";

function Example2After() {
  const [name, setName] = useState("John Doe");

  const alertName = () => {
    alert(name);
  };

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
