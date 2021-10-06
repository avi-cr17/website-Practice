import React from 'react'

const ProjectCard = (props) => {

    

    return (
        <div className="col-md-4 col-10 mx-auto mt-3">
    <div className="card text-white text-center  bg-dark " style={{width:'30 vw', fontSize:'70%'}}>
  <img className="card-img-top" src={props.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
  </div>
  <ul className="list-group list-group-flush" >
    <li className="list-group-item bg-dark text-white">{props.tech}</li>
  </ul>
  <div className="card-body" >
    <a href={props.link} target="_blank" rel="noreferrer" className="card-link btn btn-danger">Github Link</a>
  </div>
</div>
</div>
    )
}

export default ProjectCard
