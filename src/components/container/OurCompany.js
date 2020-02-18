import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class OurCompany extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            creative_agency_feature_img: '',
            creative_agency_feature_alt: '',
            creative_section_heading: '',
            creative_section_text: '',
        }
    }

    componentDidMount() {
        this.setState({
            id: creative_agency_data.id,
            creative_agency_feature_img: creative_agency_data.creative_agency_feature_img,
            creative_agency_feature_alt: creative_agency_data.creative_agency_feature_alt,
            creative_section_heading: creative_agency_data.creative_section_heading,
            creative_section_text: creative_agency_data.creative_section_text,
            creative_section_button: creative_agency_data.creative_section_button
        })
    }

    render() {
        return (
            <section className="creative-agency-area section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 non-padding no-padding">
                            <div className="creative-agency-feature-img">
                                <Fade left>
                                    <img src={this.state.creative_agency_feature_img} alt={this.state.creative_agency_feature_alt} />
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title section-title-padding creative-agency-wrapper-content">
                                <Fade right>
                                    <h2>{this.state.creative_section_heading}</h2>
                                    <p>{this.state.creative_section_text.substring(0, 878)}</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default OurCompany;

// Creative Agency About Heading Content
const creative_agency_data = {
    id: 1,
    creative_agency_feature_img: require("../../assets/images/aboutUs.JPG"),
    creative_agency_feature_alt: "creative feature image",
    creative_section_heading: "The Company",
    creative_section_text: "Bonian Knit Fashion Ltd is a complete supply solution for garments industry in Bangladesh. We have a dedicated manufacturing plant. We provide a premium service to our clients with complete support across product development, manufacturing and export. We have 14-year long experience in doing what we do.",
}
