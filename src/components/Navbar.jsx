import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  

    return (
        <>
        <div className="container-fluid nav_bg " >
            <div className="row" >
                <div className="d-flex justify-content-between align-items-center col-10 mx-auto">


              
  {/*}  <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid ">
    <NavLink to="/" className="nav-link onhover" >Home{'<3'}  </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  offset-md-7" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  to="/project"  className="nav-link onhover" aria-current="page" >Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/about" className="nav-link onhover">About Me</NavLink>
        </li>   
      </ul>
    </div>
  </div>
  
</nav>  
    */}
    <nav className="navbar navbar-expand-lg navbar-light  w-100">
      <div className=' col-4 navbar-nav'>
      <NavLink  to="/" className="nav-link onhover" >Home{'<3'}  </NavLink>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <div className="navbar-nav text-center d-flex justify-content-end w-100 ">
        <div className="nav-item mx-3">
          <NavLink  to="/project"  className="nav-link onhover" aria-current="page" >Projects</NavLink>
        </div>
        <div className="nav-item">
          <NavLink  to="/about" className="nav-link onhover">About Me</NavLink>
        </div>   
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
