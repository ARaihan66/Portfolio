import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '../Assets/data';
import clientOne from '../Assets/Picture/man1.jpg';
import clientTwo from '../Assets/Picture/man2.jpg';
import clientThree from '../Assets/Picture/man3.jpg';
import clientFour from '../Assets/Picture/man4.jpg';
import clientFive from '../Assets/Picture/man5.jpg';

function Testimonial() {
    return (
        <div style={{ backgroundColor: 'pink' }}>
            <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>PEOPLE SAYS</h2>
            <Carousel>
                <Carousel.Item className='carousel' style={{ height: '570px' }}>
                    <img
                        src={clientOne}
                        alt="Third slide"
                        className="rounded-circle mb-4"
                        style={{ width: "150px" }}
                    />
                    <div className='container' style={{ textAlign: 'justify' }}>
                        <h3 style={{ textAlign: 'center' }}>Robert Pitter</h3>
                        <p style={{ paddingLeft: '120px', paddingRight: '120px', paddingTop: '30px' }}>{data.clientOpinion[0]}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel' style={{ height: '570px' }}>
                    <img
                        src={clientTwo}
                        alt="Third slide"
                        className="rounded-circle mb-4"
                        style={{ width: "150px" }}
                    />
                    <div className='container' style={{ textAlign: 'justify' }}>
                        <h3 style={{ textAlign: 'center' }}>Robert Pitter</h3>
                        <p style={{ paddingLeft: '120px', paddingRight: '120px', paddingTop: '30px' }}>{data.clientOpinion[0]}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel' style={{ height: '570px' }}>
                    <img
                        src={clientThree}
                        alt="Third slide"
                        className="rounded-circle mb-4"
                        style={{ width: "150px" }}
                    />
                    <div className='container' style={{ textAlign: 'justify' }}>
                        <h3 style={{ textAlign: 'center' }}>Robert Pitter</h3>
                        <p style={{ paddingLeft: '120px', paddingRight: '120px', paddingTop: '30px' }}>{data.clientOpinion[0]}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel' style={{ height: '570px' }}>
                    <img
                        src={clientFour}
                        alt="Third slide"
                        className="rounded-circle mb-4"
                        style={{ width: "150px" }}
                    />
                    <div className='container' style={{ textAlign: 'justify' }}>
                        <h3 style={{ textAlign: 'center' }}>Robert Pitter</h3>
                        <p style={{ paddingLeft: '120px', paddingRight: '120px', paddingTop: '30px' }}>{data.clientOpinion[0]}</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel' style={{ height: '570px' }}>
                    <img
                        src={clientFive}
                        alt="Third slide"
                        className="rounded-circle mb-4"
                        style={{ width: "150px" }}
                    />
                    <div className='container' style={{ textAlign: 'justify' }}>
                        <h3 style={{ textAlign: 'center' }}>Robert Pitter</h3>
                        <p style={{ paddingLeft: '120px', paddingRight: '120px', paddingTop: '30px' }}>{data.clientOpinion[0]}</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Testimonial;