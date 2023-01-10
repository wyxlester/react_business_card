import React from 'react'
import Lester from "../assets/lester_lensa.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

const Admin = () => {
  return (
    <div class="mx-auto align-middle">
      <img src={Lester} alt="testing" class="my_image rounded mx-auto d-block"/>
      <h6 class="text-center"><strong>Aspiring Technopreneur | Ex Naval Officer</strong></h6>
    </div>
  )
}

export default Admin
