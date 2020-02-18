import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


// service heading data
const service_heading_data = {
    heading: "Values",
    heading_text: "The whole foundation of our company is rooted in values that drive us towards excellence without compromising on humanly goals."
}


// all service data 
const all_service_data = [
    {
        service_image: require("../../assets/images/services/collaborative.png"),
        service_image_alt: "service image",
        service_title: "Collaborative",
        service_text: "We help our customers develop their designs and assist them across the whole production process up until exports. "
    },
    {
        service_image: require("../../assets/images/services/commitment.png"),
        service_image_alt: "service image",
        service_title: "Commitment",
        service_text: "We are highly committed to provide the best and complete supply solution for your garment needs. We ensure consistent quality and on time shipment."
    },
    {
        service_image: require("../../assets/images/services/social_responsibility.png"),
        service_image_alt: "service image",
        service_title: "Social Responsibility",
        service_text: "We emphasize greatly on the fire safety of our workplace. We also provide financial support to primary school and madrasas in our areas."
    },
    {
        service_image: require("../../assets/images/services/ethical_business.png"),
        service_image_alt: "service image",
        service_title: "Ethical Business",
        service_text: "We have a section that accommodates fully organic production as certified by GOTS. No chemicals or fertilizers are used. The dye is organic."
    },
]

const get_service_data = all_service_data.map((single_data, i) => {
    return (
        <div className="col-lg-3 col-md-6" key={i}>
            <div className="bonian-single-service text-center">
                <div className="single-service-img">
                    <img src={single_data.service_image} alt={single_data.service_image_alt} />
                </div>
                <h3 className="single-service-heading">{single_data.service_title}</h3>
                <p>{single_data.service_text}</p>
            </div>
        </div>
    )
});

class Services extends Component {
    render() {
        return (
            <section className="bonian-service-area section-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                            <div className="section-title text-center section-title-padding">
                                <h2>{service_heading_data.heading}</h2>
                                <p>{service_heading_data.heading_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Fade up>
                            {get_service_data}
                        </Fade>
                    </div>
                </div>
            </section>
        )
    }
}
export default Services;