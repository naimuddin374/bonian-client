import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CallToAction extends Component {
    render() {
        return (
            <section className="call-to-action-area section-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                            <div className="call-to-action-wrapper text-center">
                                <div className="call-to-action-inner-content">
                                    <h2 className="pb-4">We are 24 / 7 hr available for you</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates voluptatibus quis accusantium voluptate consequatur vel autem nulla nesciunt quam.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/contact`} className="theme-btn mt-5">Contact With  Us</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default CallToAction