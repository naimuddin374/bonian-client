import React from 'react';
// sustainability logo data
const sus_logo = [
    {
        logo: require("../../../assets/images/Sustainability/1.png"),
        logo_alt: "sustainability logo",
    },
    {
        logo: require("../../../assets/images/Sustainability/2.png"),
        logo_alt: "sustainability logo",
    },
    {
        logo: require("../../../assets/images/Sustainability/3.png"),
        logo_alt: "sustainability logo",
    },
    {
        logo: require("../../../assets/images/Sustainability/4.png"),
        logo_alt: "sustainability logo",
    },
    {
        logo: require("../../../assets/images/Sustainability/5.png"),
        logo_alt: "sustainability logo"
    },
]

const SustainabilityLogoPortion = () => {
    return (
        <section className="sustainability-logo-portion pb-5">
            <div className="container">
                <div className="row">
                    {
                        sus_logo.map((single_sus_logo, i) => (
                            <div className="col-lg-4 col-md-4" key={i}>
                                <div className="single-sustainability-logo-content">
                                    <div className="sus-logo-img">
                                        <img src={single_sus_logo.logo} alt={single_sus_logo.logo_alt} />
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
export default SustainabilityLogoPortion