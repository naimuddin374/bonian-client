import React from 'react';


// all data
const all_data_compliance = {
    title: "Compliance at Bonian",
    compliance_text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, inventore nobis! Incidunt, fuga? Libero eius officia perspiciatis debitis esse? Sint magnam saepe architecto sapiente adipisci. Iusto totam reprehenderit, vel obcaecati quibusdam officia sint quis tenetur harum enim atque unde similique sequi in nobis dolore veritatis. Lorem ipsum dolor sit. Error sit voluptatem facere et. Lorem ipsum dolor sit amet consectetur",
    compliance_img: require("../../../assets/images/compliance_welcome.png"),
    compliance_img_alt: "compliance image",
    compliance_feature: [
        {
            single_feature: "Google Cloud certifications"
        },
        {
            single_feature: "General information about regional "
        },
        {
            single_feature: "industry news and best practices updates"
        },
    ]
}

const WelcomeCompliance = () => {
    return (
        <section className="compliance-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="compliance-wrapper">
                            <div className="section-title bonian-welcome-text">
                                <h2 className="pb-4">{all_data_compliance.title}</h2>
                                <p>{all_data_compliance.compliance_text}</p>

                                <div className="compliance-feature pt-4">
                                    <ul>
                                        {
                                            all_data_compliance.compliance_feature.map((single_feature, i) => (
                                                <li key={i}>{single_feature.single_feature}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="compliance-feature-img">
                            <img src={all_data_compliance.compliance_img} alt={all_data_compliance.compliance_img_alt} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WelcomeCompliance