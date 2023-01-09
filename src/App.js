import React from 'react'
import Admin from "./components/Admin.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import Footer from "./components/Footer.js"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div class="container">
      <div>
        <Admin />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
