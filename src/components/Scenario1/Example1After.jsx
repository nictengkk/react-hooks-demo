import React from 'react'

function Example1After() {
  const alertName = () => {
    alert("John Doe");
  };

  return (
    <div>
        <h3>This is a Functional Component</h3>
        <button onClick={alertName} className="btn btn-primary">
          Alert
        </button>
      </div>
  )
}

export default Example1After
