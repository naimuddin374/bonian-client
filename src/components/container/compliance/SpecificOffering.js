import React, {Component} from 'react';

// all data 
const all_data_offering = [
    {
        offering_img:require("../../../assets/images/compliance/specific/Icon_Certifications_White.png"),
        offering_alt:"offering image",
        offering_tile:"Certifications",
        offering_text:"Our products regularly undergo independent verification of their security, privacy, and compliance controls, achieving certifications, attestations of compliance,"
    },
    {
        offering_img: require("../../../assets/images/compliance/specific/Icon_Public_Certificates_White.png"),
        offering_alt: "offering image",
        offering_tile: "Government and public sector",
        offering_text: "Our products regularly undergo independent verification of their security, privacy, and compliance controls, achieving certifications, attestations of compliance,"
    },
    {
        offering_img: require("../../../assets/images/compliance/specific/standards_-_for_webpage.png"),
        offering_alt: "offering image",
        offering_tile: "Healthcare and life sciences",
        offering_text: "Our products regularly undergo independent verification of their security, privacy, and compliance controls, achieving certifications, attestations of compliance,"
    },
]

class SpecificOffering extends Component{
    render(){
        return (
            <section className="compliance-specific-offering-area section-padding section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title text-center section-title-padding">
                                <h2>Industry-specific compliance</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            all_data_offering.map((single_offering, i) => (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="single-specific-offering">
                                        <div className="specific-offering-img">
                                            <img src={single_offering.offering_img} alt={single_offering.offering_alt} />
                                        </div>
                                        <h4>{single_offering.offering_tile}</h4>
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
export default SpecificOffering