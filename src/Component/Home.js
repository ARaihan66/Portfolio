import React from 'react';
import background from '../Assets/background.jpg';

const Home = () => {
    return (

        <div>
            <div style={{ backgroundImage: `url(${background})`, paddingTop: '160px', height: '650px', maxWidth: '1380px' }}>
                <div style={{ paddingTop: '110px', textAlign: 'center', color: 'white' }}>
                    <p style={{ letterSpacing: '3px', backgroundColor: 'blue', display: 'inline' }}>HAY THERE</p>
                    <h1>I'M  ABU RAIHAN</h1>
                    <p style={{ letterSpacing: '4px', lineHeight: '15px', backgroundColor: 'blue', display: 'inline', fontSize: '20px' }}>A FULL STACK WEB DEVELOPER</p>
                    <div>
                        <span ><a href='' className='link' ><i class="fa-brands fa-facebook"></i></a></span>
                        <span ><a href='' className='link'><i class="fa-brands fa-github" ></i></a></span>
                        <span ><a href='' className='link'><i class="fa-brands fa-linkedin"></i></a></span>
                        <span ><a href='' className='link'><i class="fa-brands fa-twitter"></i></a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;