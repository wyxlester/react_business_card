import React from 'react'
import Admin from "./components/Admin.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div class="container">
      <div class="row">
        <Admin />
      </div>

      <div class="row">
        <About />
      </div>

      <div class="row">
        <Projects />
      </div>

      <div class="row">
        <Contact />
      </div>
    </div>
  );
}

export default App;
