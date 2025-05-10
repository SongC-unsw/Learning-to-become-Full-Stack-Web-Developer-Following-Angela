import React, { useState } from "react";

function App() {
  const [formInput, setFormInput] = useState("");
  const [submitStatus, setSubmitStatus] = useState(false);
  const [heading, setHeading] = useState("");
  const handleChange = (e) => {
    setFormInput(e.target.value);

  };
  const handleSubmit = () => {
    // setSubmitStatus(true);
    setHeading(formInput);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input type="text" onChange={handleChange} placeholder="What's your name?" value={formInput}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
