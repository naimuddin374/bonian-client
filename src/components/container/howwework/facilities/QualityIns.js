import React from 'react';
import Fade from 'react-reveal/Fade';
// all data

const quality_data = {
    icon:"fa fa-trophy",
    first_text_one:"An expert team of qualified person is responsible to assure the quality of the materials to meet the international standards. In the garment manufacturing unit we are following the quality standards with in AQL random sampling plan. In fabric we are using various test methods according to AATCC,",
    first_text_two:"ISO and BC standards for checking physical properties of fabric to assure complete compliance with the international level of quality standards."
}

const  QualityIns = () =>{
    return (
        <div className="col-lg-6 col-md-6">
            <div className="quality-insurance-area mer-quality-area">
                <Fade up>
                    <div className="sub-section-title pb-4 quality-ins-sub-heading merc-quality-icon">
                        <i className={quality_data.icon}></i>
                    </div>
                    <div className="quality-inner-content block-heading-content">
                        <h3>Quality Assurance</h3>
                        <p className="pb-4">{quality_data.first_text_one}</p>
                        <p>{quality_data.first_text_two}</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default QualityIns;