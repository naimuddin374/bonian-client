import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
class ExtraFeature extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <section className="company-welcome-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <Fade left>
                                <div className="section-title sub-section-title section-title-padding welcome-heading-content">
                                    <span>{company_welcome_data.company_sub_heading}</span>
                                    <h2>{company_welcome_data.company_heading}</h2>
                                    <p>{company_welcome_data.company_welcome_text}</p>

                                    <Link to={`${process.env.PUBLIC_URL}/contact`} className="theme-btn mt-40">{company_welcome_data.contact_btn}</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Fade right>
                                <img src={company_welcome_data.company_feature_img} alt={company_welcome_data.company_feature_img_alt} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ExtraFeature;

// about us page company welcome
const company_welcome_data = {
    company_sub_heading: "Bonian Knit Fashions LTD.",
    company_heading: "Global Knitwear Manufacturer",
    company_welcome_text: "Bonian Knit Fashions Ltd was established in January 2006 with the aim to provide Global Knitwear Solutions. Since then, we have become a leading manufacturer and exporter of knit readymade garments in Bangladesh. With our own manufacturing plant and fleet of organized, skilled workers we ensure quality production of versatile products. Our design and development team help the clients develop their innovative designs while our quality assurance team double checks along the steps of production. We deliver quality products in time. ",
    company_feature_img: require("../../../assets/images/aboutpage/extra_feature.png"),
    company_feature_img_alt: "company feature image",
    contact_btn: "Contact Us"
}
