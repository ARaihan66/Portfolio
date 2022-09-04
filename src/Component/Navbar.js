import React from 'react';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid col-lg-4">
                <a className="navbar-brand" href="#"><h4> Abu Raihan</h4></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-lg-8">
                <ul className="navbar-nav justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
                    <li className="nav-item">
                        <a className="nav-link nlink" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nlink" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nlink" href="#">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nlink" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nlink" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nlink" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;

