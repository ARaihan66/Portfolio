import React from "react";
import data from '../Assets/data';
import FullStack from '../FullStack.png';
import FrontEnd from '../FrontEnd.png';
import BackEnd from '../BackEnd.png';

const Services = () => {
    return (
        <div>
            <h2 style={{ marginTop: '10px', textAlign: 'center' }}>My Services</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card" style={{ height: '400px' }}>
                            <div style={{ paddingLeft: '30px' }}>
                                <img src={FrontEnd} style={{ height: '200px', width: '180px', paddingTop: '10px' }} />
                            </div>
                            <h5>FrontEnd Development</h5>
                            <h6 style={{ paddingTop: '8px' }}>{data.services[0]}</h6>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card" style={{ height: '400px' }}>
                            <div style={{ paddingLeft: '30px' }}>
                                <img src={BackEnd} style={{ height: '200px', width: '180px', paddingTop: '10px' }} />
                            </div>
                            <h5>BackEnd Development</h5>
                            <h6>{data.services[1]}</h6>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card" style={{ height: '400px' }}>
                            <div style={{ paddingLeft: '30px' }}>
                                <img src={FullStack} style={{ height: '200px', width: '180px', paddingTop: '10px' }} />
                            </div>
                            <h5>Full Stack Development</h5>
                            <h6>{data.services[2]}</h6>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Services;