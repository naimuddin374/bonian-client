import React, { Component } from 'react';


// all data more info content

const more_info_why = {
    dedicated_team: [
        {
            more_icon: "fa fa-coffee",
            more_info_heading: "Quick samples made by a dedicated team",
            more_info_text: "Our in-house sample section has capacity to create 3,000 samples per month for any purpose. We are proud of our partnerships with leading suppliers in China, India and Bangladesh, all offering the fastest of turn arounds to make your concept a reality."
        }
    ],
    moq_time_line: [
        {
            moq_image: require("../../../assets/images/more_info_why_us/dress.png"),
            moq_img_alt: "MOQ image",
            moq_heading: "Men's Product",
            moq_text_one: "Minimum Order Quantities (MOQs) :",
            moq_feature_one: "Custom color / spec 1000 pcs",
            moq_text_two: "Timelines :",
            moq_feature_two: "Bangladesh – 8-10 weeks"
        }
    ],
    moq_shipping_mode: [
        {
            shipping_mode_img: require("../../../assets/images/more_info_why_us/shipping.png"),
            moq_img_alt: "shipping image",
            moq_heading: "Ladies Product",
            shipping_mode_one: "Free On Board (FOB)",
            shipping_mode_two: "Delivery Duty Paid (DDP)"
        }
    ]
}


class MoreInfoWhyUs extends Component {
    render() {
        return (
            <section className="more-info-why-us section-padding-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title text-center section-title-padding">
                                <h2>Our Product Category</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 small-screen no-padding relative-part">
                            {
                                more_info_why.dedicated_team.map((single_dedicated_team, i) => (
                                    <div className="quick-dedicated-team-content  span-mode" key={i}>
                                        <div className="dedicated-img more-info-img">
                                            <i className={single_dedicated_team.more_icon}></i>
                                        </div>
                                        <h3>{single_dedicated_team.more_info_heading}</h3>
                                        <p>{single_dedicated_team.more_info_text}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 small-screen no-padding">

                                    {
                                        more_info_why.moq_time_line.map((single_moq, i) => (
                                            <div className="moq-content-area span-mode" key={i} id="moq-content">
                                                <div className="moq-img more-info-img">
                                                    <img src={single_moq.moq_image} alt={single_moq.moq_img_alt} />
                                                </div>
                                                <h3>{single_moq.moq_heading}</h3>
                                                <p>{single_moq.moq_text_one}</p>
                                                <span>{single_moq.moq_feature_one}</span>
                                                <p>{single_moq.moq_text_two}</p>
                                                <span>{single_moq.moq_feature_two}</span>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className="col-lg-6 col-md-6 small-screen no-padding">

                                    {
                                        more_info_why.moq_shipping_mode.map((single_shipping, i) => (
                                            <div className="shipping-mode-area span-mode" key={i} id="shipping-mode">
                                                <div className="shipping-img more-info-img">
                                                    <img src={single_shipping.shipping_mode_img} alt={single_shipping.moq_img_alt} />
                                                </div>
                                                <h3>{single_shipping.moq_heading}</h3>
                                                <span>{single_shipping.shipping_mode_one}</span>
                                                <span>{single_shipping.shipping_mode_two}</span>
                                            </div>
                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default MoreInfoWhyUs;