import React, {useState, useEffect} from "react";

function Example5CustomHook() {
  const [header, handleHeaderInput] = useChangeHeader("Welcome to React Hooks")
  return (
    <div>
      <h3 id="header"> This is a Functional Component </h3>
      <input type="text" onChange={handleHeaderInput} value={header} />
    </div>
  );
}

//We have extracted state, componentDidMount, coponentDidUpdate 
//and handler logic to a seperate function. It is now reusable.

function useChangeHeader(newString){
  const [header, setHeader] = useState(newString);

  useEffect(() => {
    console.log("Updating")
    const newheader = document.querySelectorAll("#header")[0];
    newheader.innerHTML = header;
  });

  const handleHeaderInput = e => {
    setHeader(e.target.value);
  };
  return [header, handleHeaderInput]
}

export default Example5CustomHook;
