import React from "react";
import data from '../Assets/data.js';
import Hungry from '../Assets/Picture/Hungry.png';
import Ecommerce from '../Assets/Picture/Ecommerce.png';
import Burger from '../Assets/Picture/Burger.png';

const Project = () => {
    return (
        <div style={{ background: '' }}>
            <section id="projects">
                <div style={{ height: '610px' }}>
                    <h2 style={{ marginTop: '10px', textAlign: 'center' }}>MY PROJECTS</h2>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card" style={{ height: '400px' }}>
                                    <div style={{ paddingLeft: '30px' }}>
                                        <img src={Hungry} style={{ height: '160px', width: '180px', paddingTop: '10px' }} />
                                    </div>
                                    <h4>{data.projects[0]}</h4>
                                    <h5>Technology:</h5>
                                    <h6>{data.projectsTechnology[0]}</h6>
                                    <div class="col-md-12 text-center">

                                        <a href="#" className="btn btn-info btn-outline-light" style={{ marginLeft: '140px', width: '80px' }}>Live</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card" style={{ height: '400px' }}>
                                    <div style={{ paddingLeft: '30px' }}>
                                        <img src={Ecommerce} style={{ height: '160px', width: '180px', paddingTop: '10px' }} />
                                    </div>
                                    <h4>{data.projects[1]}</h4>
                                    <h5>Technology:</h5>
                                    <h6>{data.projectsTechnology[1]}</h6>
                                    <a href="#" className="btn btn-info btn-outline-light" style={{ marginLeft: '140px', width: '80px' }}>Live</a>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card" style={{ height: '400px' }}>
                                    <div style={{ paddingLeft: '30px' }}>
                                        <img src={Burger} style={{ height: '160px', width: '180px', paddingTop: '10px' }} />
                                    </div>
                                    <h4>{data.projects[2]}</h4>
                                    <h5>Technology:</h5>
                                    <h6>{data.projectsTechnology[2]}</h6>
                                    <a href="#" className="btn btn-info btn-outline-light" style={{ marginLeft: '140px', width: '80px' }}>Live</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Project;