import React from 'react';
import background from '../Assets/Picture/background.jpg';
import Download from './Download';

const Home = () => {
    return (

        <section id='home'>
            <div style={{ backgroundImage: `url(${background})`, height: '570px', maxWidth: '1380px', backgroundRepeat: 'no-repeat' }}>
                <div style={{ paddingTop: '180px', textAlign: 'center', color: 'white' }}>
                    <p style={{ letterSpacing: '3px', backgroundColor: 'blue', display: 'inline' }}>HAY THERE</p>
                    <h1>I'M  ABU RAIHAN</h1>
                    <p style={{ letterSpacing: '4px', lineHeight: '15px', backgroundColor: 'blue', display: 'inline', fontSize: '20px' }}>A FULL STACK WEB DEVELOPER</p>
                    <div style={{ marginTop: '4px' }}>
                        <Download />
                        <a href='#contact' className="btn btn-info btn-outline-light" style={{ marginTop: '4px' }}>Hire Me</a>
                    </div>


                    <div>

                        {/* <span ><a href='' className='icon' ><i class="fa-brands fa-facebook"></i></a></span>
                        <span ><a href='' className='icon'><i class="fa-brands fa-github" ></i></a></span>
                        <span ><a href='' className='icon'><i class="fa-brands fa-linkedin"></i></a></span>
                        <span ><a href='' className='icon'><i class="fa-brands fa-twitter"></i></a></span> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;