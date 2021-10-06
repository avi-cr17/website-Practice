import React from 'react'
import ProjectCard from './ProjectCard'
import img1 from "../res/discord.png"


const Project = () => {
    return (
        

        <div className="container-fluid all">
            <div className="jumbotron jumbotron-fluid col-10 mx-auto text-center">
                <div className="container">
                    <h1 className="display-4 ">My Projects</h1>
                    <p className="lead">List of my Projects</p>
                </div>
            </div>
        <div className="row">
        <div className="col-10 mx-auto  ">
                <div className="row"> 
               
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
         
           </div>
           </div>
           <div className="col-10 mx-auto  ">
                <div className="row"> 
               
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
           <ProjectCard img={img1} link="https://github.com/avi-cr17/Inspiration-Bot" title="Discord Bot" tech="python Discord.js repl.it"
           description=" Bot on discord whith multiple  functionalities"
           />
         
           </div>
           </div>
        </div>
        </div>
    )
}

export default Project
