
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';

// import animation file
const options = {
    loop: true,
    autoplay: true,
    nav: true,
    smartSpeed: 250,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    mouseDrag: true,
    autoplayHoverPause: false,
    responsiveClass: true,
    dots: false,

    responsive: {
        0: {
            items: 2
        },
        786: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
}
class Partner extends Component {
    render() {
        return (
            <section className="partner-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                            <div className="section-title section-title-padding text-center">
                                <h2>Compliance Certificate</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-12 col-md-12 relative">
                            <div className="partner-wrapper-content">
                                <OwlCarousel
                                    className="owl-carousel owl-theme"
                                    {...options}
                                >
                                    {partnerVariable}
                                </OwlCarousel>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
export default Partner;

const partnerallData = [
    { id: 1, partner_img: require('../../assets/images/compliance_logo/accord_logo.png'), },
    { id: 4, partner_img: require('../../assets/images/compliance_logo/bsci.png'), },
    { id: 5, partner_img: require('../../assets/images/compliance_logo/gots_logo.png'), },
    { id: 6, partner_img: require('../../assets/images/compliance_logo/ocs.png'), },
]

const partnerVariable = partnerallData.map((single_partner) => {
    return (
        <div className="single-partner" key={single_partner.id}>
            <div className="partner-img">
                <img src={single_partner.partner_img} alt="testimonial" />
            </div>
        </div>
    )
});