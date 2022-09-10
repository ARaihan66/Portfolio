import React from "react";
import data from '../Assets/data';
import { Card, CardBody, CardTitle, CardLink, CardText } from 'reactstrap';
import FullStack from '../Assets/Picture/FullStack.png';
import FrontEnd from '../Assets/Picture/FrontEnd.png';
import BackEnd from '../Assets/Picture/BackEnd.png';

const Services = () => {
    return (
        <div className="container">
            <h4 style={{ textAlign: 'center' }}>MY SERVICES</h4>
            <div className="row">
                <div className="col-lg-4" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                    <Card
                        style={{
                            width: '18rem',
                            height: '510px',
                        }}
                    >
                        <img
                            alt="Card"
                            src={FrontEnd}
                            style={{
                                padding: '20px'
                            }}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                FrontEnd Development
                            </CardTitle>
                            <CardText>
                                <p>{data.services[0]}</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-lg-4" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                    <Card
                        style={{
                            width: '18rem',
                            height: '510px'
                        }}
                    >
                        <img
                            alt="Card"
                            src={BackEnd}
                            style={{
                                padding: '20px'
                            }}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                BackEnd Development
                            </CardTitle>
                            <CardText>
                                <p>{data.services[1]}</p>
                            </CardText>

                        </CardBody>
                    </Card>
                </div>

                <div className="col-lg-4" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                    <Card
                        style={{
                            width: '18rem',
                            height: '510px'
                        }}
                    >
                        <img
                            alt="Card"
                            src={FullStack}
                            style={{
                                padding: '20px'
                            }}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                <h5>FullStack Development</h5>
                            </CardTitle>
                            <CardText>
                                <p>{data.services[2]}</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>

            </div>

        </div >
    )
}

export default Services;