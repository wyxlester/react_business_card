import React from 'react'
import Github from "../assets/github.png"
import LinkedIn from "../assets/linkedin.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

const Contact = () => {
  return (
    <div class="col card mx-auto">
      <h3 class="text-center pt-3 pb-2">Contact Me</h3>
      <div class="d-flex justify-content-around px-3">
        <a href="https://github.com/wyxlester" target="_blank"><img src={Github} alt="Github Logo" class="icons"/></a>
        <a href="https://www.linkedin.com/in/lester-wee" target="_blank"><img src={LinkedIn} alt="LinkedIn Logo" class="icons"/></a>
      </div>
    </div>
  )
}

export default Contact
