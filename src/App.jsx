import React, { useState } from "react";
import Project from "./components/Project";

const App = () => {
  const login = false;
  const projects = ["project A", "project B", "project C"];

  function handlesubmit(event) {
    event.preventDefault();
    alert(
      "ok, with name" +
        event.target.username.value +
        "and email with " +
        event.target.email.value,
    );
  }
  {/* use state with validation where if value =0 then functio return setvalue will not worked*/}
  const [value, SetValue] = useState(0);
  function handledecriment() {
    if (value === 0) return;
    SetValue(value - 1);
  }
  return (
    <div>
      {/* conditional operator */}
      {/*ternary operator*/}
      {login ? <>Heading1</> : <>Heading2</>}
      {/* Logical end*/}
      {/* { login && <>Heading3</>} */}
      {/*If else used in big logic */}
      {/* loop*/}
      {projects.map((project) => (
        <Project name={project} /> /*parent component pass props*/
      ))}
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your name "
          className="border m-2 p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border m-2 p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 m-2">
          submit
        </button>
      </form>
      <div>
        <button
          className="border border-gray-500 bg-blue-950 "
          onClick={handledecriment}
        >
          Decriment
        </button>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default App;
