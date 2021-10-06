import React from 'react'
import img from '../res/tech.png'

const Home = () => {
    return (
        <>
            
               {/*
                <div className="container-fluid nav_bg">
                <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                        <div className="order-2 order-lg-1 col-md-6 pt-5 col-6 text-center ">
                            <h1>Avinandan Pal</h1>
                        </div>
                        <div className="order-1 order-lg-2 col-md-6 pt-5 col-6 text-center ">
                        <img src={img} className="mt-5" style={{maxHeight:'50vh',maxWidth:'50vh'}} />
                        <div>
                        </div>
                        </div>
                        </div>
                </div>
                </div>
                </div>

               */}
                <div style={{ height:'85vh',width:'96vw'}}>
                <section className="h-100 d-flex align-items-center justify-content-center">

               
                <div className="col-12 ">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                        <div className="order-2 order-md-1 col-md-6 col-7 text-center 
                        d-flex align-items-center justify-content-center mt-5 flex-column">
                            <div className='text-center 
                        d-flex align-items-center justify-content-center mt-5'>
                        <h1 className="grow" >A</h1>
                        <h1 className="grow">V</h1>
                        <h1 className="grow">I</h1>
                        <h1 className="grow">N</h1>
                        <h1 className="grow">A</h1>
                        <h1 className="grow">N</h1>
                        <h1 className="grow">D</h1>
                        <h1 className="grow">A</h1>
                        <h1 className="grow">N</h1>
                        
                        <h1 className="seperate grow">P</h1>
                        <h1 className="grow">A</h1>
                        <h1 className="grow">L</h1>
                        </div>
                            <h2>I am an aspiring frontend developer from India</h2>
                            <button className="btn btn-success mb-3"><h3>Get started</h3></button>
                        </div>
                        <div className="order-1 order-md-2 col-md-6  col-6 text-center 
                        d-flex align-items-center justify-content-center my-5">
                        <img src={img} className="anime" style={{height:'40vh',width:'40vh'}} />
                        <div>
                        </div>
                        </div>
                        </div>
                        </div>
                        

            </section>
            </div>
        </>
    )
}

export default Home
