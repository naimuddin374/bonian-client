import React, { Component } from 'react';


// all faq data
const all_faq_data = [
    {
        single_faq_heading:"How does Rayontex ensure high quality products?",
        single_faq_text: "No matter whether our clothing is destined for budget retailers or high end luxury brands, we take the quality of our products very seriously.",
        single_faq_text_two: "Each item that is designed and manufactured by Rayontex is rigorously tested for shrinkage, colour fastness, spirality, pilling, dimensional stability, button pull out and rubbing. This is in addition to a whole battery of other physical tests to ensure the highest quality garments possible."
    },
    {
        single_faq_heading: " What technology does Rayontex use to design its clothing?",
        single_faq_text: "Our experienced technicians work with the latest edition of CAD to ensure that the technical aspects like shape and fitting meet with our customer’s expectations. We use highly accurate measurement charts and patterns as well as hi tech machinery and bulk printing, so that the real production costs can be ascertained right at the beginning of a product’s development."
    },
    {
        single_faq_heading: "Does Rayontex act impartially",
        single_faq_text: "As a fair and transparent supplier we are always 100% on the side of our clients. For this reason, all our manufacturers are entirely third-party and we take no ownership in any factory operation. Whilst we build strong working relationships with our suppliers, we understand that very rarely it is crucial for us to hold a manufacturer to account on behalf of our clients. In that unlikely event of manufacturing challenges, our clients can rest assured that we are committed to finding the best solutions for them."
    },
    {
        single_faq_heading: "Do you offer samples/prototypes?",
        yes_text:"Of course!",
        single_faq_text: "Our in-house sample section has the capacity to produce 3,000 samples per month, offering any quantity of sample types. Using our fully equipped in-house testing laboratory we ensure that every material proposed or used in the sample stands up to the strictest quality assurance tests.",
        single_text_two: "We are proud of our close partnerships with leading suppliers in China, India and Bangladesh, and offer a very fast turnout of prototype samples for our customers. This allows us to show that we have understood the concept, as well as giving clients the chance to see and feel the quality of what we offer."
    },
    {
        single_faq_heading: "What about contingency planning and risk?",
        yes_text: "Of course!",
        single_faq_text: "We believe contingency and risk management for our clients should be a completely customised service. We assist our clients in understanding the risks associated with the apparel market in order to mitigate these risks accordingly. From creating secure back up supply chains to eliminating lead-time failures, we work with our clients to help avoid any nasty surprises."
    },
    {
        single_faq_heading: "How many factories do you work with?",
        single_faq_text: "We work with 50 partnering factories in China, India and Bangladesh. Each one is strictly regulated and controlled with regard to compliance and monitoring."
    },

    {
        single_faq_heading: "Can Rayontex help with customs and clearance issues?",
        single_faq_text: "Rayontex understands that fulfilment is much more than simply transporting your product from one port to another. We know about the complexities of international customs, shipment and clearance and are experts at building seamless logistics solutions. Whether this is integrating our client’s regional distribution centres into the supply chain or making time sensitive deliveries to independent warehouses, we can fulfil every supply chain requirement."
    },
    {
        single_faq_heading: "How can I contact Rayontex?",
        single_faq_text: "Whatever your problem, query or issue, we are here to resolve it for you quickly and professionally. Please use our contact us page for details about how to get in touch."
    },

]

class FaqContent extends Component {
    render() {
        return (
            <section className="faq-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="faq-section-title-area section-title-padding">
                                <div className="section-title text-center">
                                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {
                        all_faq_data.map((single_faq_data, i)=>(
                            <div className="col-lg-6 col-md-6" key={i}>
                                <div className="single-faq-content">
                                    <h3 className="faq-heading">{single_faq_data.single_faq_heading}</h3>
                                    <span>{single_faq_data.yes_text}</span>
                                    <p>{single_faq_data.single_faq_text}</p>

                                    <p>{single_faq_data.single_faq_text_two}</p>

                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default FaqContent;