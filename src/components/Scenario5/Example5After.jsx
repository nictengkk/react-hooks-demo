import React, {useState, useEffect} from "react";

function Example5After() {
  const [header, setHeader] = useState("Welcome to React Hooks");

  useEffect(() => {
    console.log("Updating")
    const newheader = document.querySelectorAll("#header")[0];
    newheader.innerHTML = header;
  });

  const handleHeaderInput = e => {
    setHeader(e.target.value);
  };

  return (
    <div>
      <h3 id="header"> This is a Functional Component </h3>
      
      <input type="text" onChange={handleHeaderInput} value={header} />
    </div>
  );
}

export default Example5After;
