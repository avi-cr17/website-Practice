import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg " style={{ backgroundColor:'lightblue'}}>
            <div className="row" >
                <div className="col-10 mx-auto">


              
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid ">
    <NavLink to="/" className="navbar-brand onhover" ><strong>Home{'<3'} </strong> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  offset-md-8" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  to="/project"  className="nav-link active onhover" aria-current="page" ><strong>Projects</strong></NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/about" className="nav-link onhover"><strong>About Me</strong></NavLink>
        </li>   
      </ul>
    </div>
  </div>
</nav>  

                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
