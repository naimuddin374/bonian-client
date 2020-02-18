import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

// office address
const office_address = {
    address_title: "Office Address:",
    address_icon: "fa fa-map-marker",
    address_list: "House - 53, Road - 14, Sector - 13 Uttara, Dhaka - 1230, Bangladesh"
}


// factory address
const factory_address = {
    address_title: "Factory Address:",
    address_icon: "fa fa-map-marker",
    address_factory_location: "Latifpur, Sardagonj, Kashimpur, Gazipur - 1346, Bangladesh."
}

class OfficeAddress extends Component {
    render() {
        return (
            <section className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title text-center">
                                <h2>Office Address</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row contact-shape-bg">
                        <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 offset-lg-1 offset-md-1">
                                    <div className="office-address-content">
                                        <Fade up>
                                            <i className={office_address.address_icon}></i>
                                            <h3>{office_address.address_title}</h3>
                                            <a href="#"><p>{office_address.address_list}</p></a>
                                        </Fade>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 offset-lg-1 offset-md-1">
                                    <div className="office-address-content">
                                        <Fade up>
                                            <i className={factory_address.address_icon}></i>
                                            <h3>{factory_address.address_title}</h3>
                                            <a href=""><p>{factory_address.address_factory_location}</p></a>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default OfficeAddress;