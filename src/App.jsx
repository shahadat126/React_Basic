import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Project from "./components/Project";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";
import Immutable from "./components/Immutable";
import Fruits from "./components/Fruits";
import Home from "./components/Home";
import About from "./components/About";

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
      {/* <form onSubmit={handlesubmit}>
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
      </form> */}
      {/* <UseState/>
      <UseRef/>
      <Immutable/>
      <Fruits/> */}
     <BrowserRouter>
     <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about' className={({isActive})=>(isActive ? 'active-link red bold' : 'inactive-link blue bold')}>About</NavLink>
     </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;
