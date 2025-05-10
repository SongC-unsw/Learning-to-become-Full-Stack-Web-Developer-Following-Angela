import React from "react";
import { useState } from "react";
function App() {
  const handleClick = () => {
    setHeadingText("Submitted")
  };
  const handleMouseOver = () => {
    setMouseClass("mouseover");
  }
  const handleMouseOut = () => {
    setMouseClass("mouseout");
  }
  const [headingText, setHeadingText] = useState("Hello");
  const [mouseClass, setMouseClass] = useState("mouseout");
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button className={mouseClass} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

export default App;
