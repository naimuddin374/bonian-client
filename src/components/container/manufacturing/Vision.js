import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
//  vision feature data
const mission_feature_Data = {
    mission_title: "Our Vission",
    mission_feature_img: require("../../../assets/images/vission.JPG"),
    mission_feature_img_alt: "mission image",
    mission_target_content: [
        {
            single_target: "Become a market leader in all sectors of Apparel industry."
        },
        {
            single_target: "Introducing automation technology in product manufacturing of RMG sector."
        },
        {
            single_target: "Develop innovative, independent designs and approach potential clients."
        },
        {
            single_target: "To spread our services across the globe. "
        },
    ]
}
// vision features content loop
const get_mission_data = mission_feature_Data.mission_target_content.map((single_feature_Data, i) => {
    return (
        <li key={i}><i className="fa fa-angle-double-right"></i>{single_feature_Data.single_target}</li>
    )
});
class Vision extends Component {
    render() {
        return (
            <React.Fragment>
                <Fade right>
                    <div className="col-lg-6 col-md-12 no-padding">
                        <div className="mission-vision-feature-img">
                            <img src={mission_feature_Data.mission_feature_img} alt={mission_feature_Data.mission_feature_img_alt} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="bonian-mission-content section-title bonian-welcome-text">
                            <h2>{mission_feature_Data.mission_title}</h2>
                            <ul className="vision-feature bonian-mission-vision-feature">
                                {get_mission_data}
                            </ul>
                        </div>
                    </div>
                </Fade>
            </React.Fragment>
        )
    }
}
export default Vision;











