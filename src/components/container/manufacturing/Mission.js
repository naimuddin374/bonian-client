import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//  mission feature data
const mission_feature_Data = {
    mission_title: "Our Mission",
    mission_feature_img: require("../../../assets/images/mission.JPG"),
    mission_feature_img_alt: "mission image",
    mission_target_content: [
        {
            single_target: "On time delivery"
        },
        {
            single_target: "Product development as per latest fashion trends"
        },
        {
            single_target: "Help customers create innovative products"
        },
        {
            single_target: "Strictly maintain quality of product across each step of production."
        }
    ]
}


// mission features content loop
const get_mission_data = mission_feature_Data.mission_target_content.map((single_feature_Data, i) => {
    return (
        <li key={i}><i className="fa fa-angle-double-right"></i>{single_feature_Data.single_target}</li>
    )
});

class Mission extends Component {
    render() {
        return (
            <React.Fragment>
                <Fade left>
                    <div className="col-lg-6 col-md-12">
                        <div className="bonian-mission-content  section-title bonian-welcome-text">
                            <h2>{mission_feature_Data.mission_title}</h2>
                            <ul className="mission-feature bonian-mission-vision-feature">
                                {get_mission_data}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 no-padding">
                        <div className="mission-vision-feature-img">
                            <img src={mission_feature_Data.mission_feature_img} alt={mission_feature_Data.mission_feature_img_alt} />
                        </div>
                    </div>
                </Fade>
            </React.Fragment>
        )
    }
}
export default Mission;










