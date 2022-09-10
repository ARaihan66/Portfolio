import React from "react";
import data from '../Assets/data.js';
import Hungry from '../Assets/Picture/Hungry.png';
import Ecommerce from '../Assets/Picture/Ecommerce.png';
import Burger from '../Assets/Picture/Burger.png';
import { Card, CardBody, CardTitle, CardLink, CardText } from 'reactstrap';

const Project = () => {
    return (
        <div className="container">
            <h4 style={{ textAlign: 'center' }}>MY PROJECTS</h4>
            <div className="row">
                <div className="col-lg-4 text-center" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                    <Card
                        style={{
                            width: '18rem',
                            height: '510px',
                        }}
                    >
                        <img
                            alt="Card"
                            src={Hungry}
                            style={{
                                padding: '20px'
                            }}
                        />
                        <CardBody>
                            <CardTitle tag="h4">
                                {data.projects[0]}
                            </CardTitle>
                            <CardText>
                                <h6>{data.projectsTechnology[0]}</h6>
                                <p>{data.services[0]}</p>
                            </CardText>
                            <div style={{ textAlign: 'center', paddingTop: '45px' }}>
                                <CardLink href="#" className="btn btn-info btn-outline-light">
                                    Live Site
                                </CardLink>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-lg-4 text-center" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                    <Card
                        style={{
                            width: '18rem',
                            height: '510px'
                        }}
                    >
                        <img
                            alt="Card"
                            src={Ecommerce}
                            style={{
                                padding: '20px'
                            }}
                        />
                        <CardBody>
                            <CardTitle tag="h4">
                                {data.projects[1]}
                            </CardTitle>
                            <CardText>
                                <h6>{data.projectsTechnology[1]}</h6>
                                <p>{data.services[1]}</p>
                            </CardText>
                            <div style={{ textAlign: 'center', paddingTop: '60px' }}>
                                <CardLink href="#" className="btn btn-info btn-outline-light">
                                    Live Site
                                </CardLink>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-lg-4 text-center" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                    <Card
                        style={{
                            width: '18rem',
                            height: '510px'
                        }}
                    >
                        <img
                            alt="Card"
                            src={Burger}
                            style={{
                                padding: '20px'
                            }}
                        />
                        <CardBody>
                            <CardTitle tag="h4">
                                {data.projects[2]}
                            </CardTitle>
                            <CardText>
                                <h6>{data.projectsTechnology[2]}</h6>
                                <p>{data.services[2]}</p>
                            </CardText>
                            <div style={{ textAlign: 'center' }}>
                                <CardLink href="#" className="btn btn-info btn-outline-light">
                                    Live Site
                                </CardLink>
                            </div>
                        </CardBody>
                    </Card>
                </div>

            </div>

        </div >
    )
}


export default Project;