import React from "react";

const Contact = () => {
    return (
        <div style={{ background: 'gray' }}>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2 style={{ textAlign: 'center', paddingTop: '5px' }}>CONTACT ME</h2>
                    </div>

                    <div className="row mt-2">

                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-map"></i>
                                <h5>My Address</h5>
                                <p>421/1 Malibagh, Dhaka, Bangladesh</p>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-share-alt"></i>
                                <h5>Social Profiles</h5>
                                <div className="social-links">
                                    <a href="#" className="twitter footer-icon"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook footer-icon"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram footer-icon"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="google-plus footer-icon"><i className="bi bi-skype"></i></a>
                                    <a href="#" className="linkedin footer-icon"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-envelope"></i>
                                <h5>Email Me</h5>
                                <p>md.abu.raihan7793@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 d-flex align-items-stretch">
                            <div className="info-box">
                                <i className="bx bx-phone-call"></i>
                                <h5>Call Me</h5>
                                <p>+88 01767013859</p>
                            </div>
                        </div>
                    </div>

                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>

                        <div className="text-center" style={{ marginTop: '5px' }}><button type="submit" className="btn btn-info btn-outline-light">Submit</button></div>
                    </form>
                </div>
                <div style={{ background: 'black', color: 'white', textAlign: 'center', marginTop: '5px', height: '35px' }}>
                    © 2022 Copyright: Abu Raihan
                </div>
            </section>
        </div >
    )
}

export default Contact;