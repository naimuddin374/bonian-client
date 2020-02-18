import React, { Component } from 'react';

const customer_love = {
    section_title: "Why our customers love us?",
    customer_love_group: [
        {
            customer_love_icon: require("../../../assets/images/customer_love/ontime.png"),
            customer_love_icon_alt: "customer love icon",
            customer_heading: "On Time Delivery and Shipment",
            customer_text: "We understand the importance of timely deliveries when it comes to businesses, which is why we heavily emphasize on timely deliveries and shipment."
        },
        {
            customer_love_icon: require("../../../assets/images/customer_love/dedicated_quality.png"),
            customer_love_icon_alt: "customer love icon",
            customer_heading: "Dedicated Quality Control and Inspection Teams",
            customer_text: "We have Dedicated Quality Control and Inspection Teams working on the clock to make sure each step of production meets its optimum Quality."
        },
        {
            customer_love_icon: require("../../../assets/images/customer_love/source.png"),
            customer_love_icon_alt: "customer love icon",
            customer_heading: "Extensive Sourcing Capabilities",
            customer_text: "We possess a strong sourcing network in the apparel industry which allows us to acquire great amounts of raw materials when required."
        },
        {
            customer_love_icon: require("../../../assets/images/customer_love/compliant.png"),
            customer_love_icon_alt: "customer love icon",
            customer_heading: "Fully Compliant and Maintained Plant",
            customer_text: "It is one of our prime concerns to ensure safety of the workplace and the workers, as well as improving their lives. BKFL is fully compliant of all Rules and Regulations by BGMEA & Labor Law 2006. More so, our Compliance Department constantly works on updating all facilities and documents as per Buyer's Code of Conduct and Compliance Guidelines."
        },
        {
            customer_love_icon: require("../../../assets/images/customer_love/manufacturing_process.png"),
            customer_love_icon_alt: "customer love icon",
            customer_heading: "Organic Manufacturing Process",
            customer_text: "We believe in conserving our nature and compensating for the damage we cause to our universe. Which is why we have chosen an organic manufacturing process."
        },

        {
            customer_love_icon: require("../../../assets/images/customer_love/personalization.png"),
            customer_love_icon_alt: "13 + Years of Experience",
            customer_heading: "Personalized and Dedicated Development Support",
            customer_text: "We believe in complete customer satisfaction across our journey, and so we provide a fully personal and dedicated development support which allows us to cater the perfect product for our respective clients."
        },

    ]
}


class CustomerLove extends Component {
    render() {
        return (
            <section className="customer-love-area section-padding section-bg">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center">
                                <h2>{customer_love.section_title}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {
                            customer_love.customer_love_group.map((single_customer, i) => (

                                <div className="col-lg-6 col-md-6" key={i}>
                                    <div className="single-customer-love-quote">
                                        <div className="customer_love_img">
                                            <img src={single_customer.customer_love_icon} alt={single_customer.customer_love_icon_alt} />
                                        </div>
                                        <div className="customer-love-content">
                                            <h3>{single_customer.customer_heading}</h3>
                                            <p>{single_customer.customer_text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        )
    }
}

export default CustomerLove;