import React from 'react'
import Admin from "./components/Admin.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div class="container pt-3 pb-5">

      <div class="row">
        <div class="col">
          <Admin />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <About />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Projects />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
