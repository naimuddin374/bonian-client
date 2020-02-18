import React, { Component } from 'react';
import MissionVisionBreadcrumb from "../container/breadcrumb/MissionVisionBreadcrumb";
import Welcome from  "../container/aboutpagecontainer/WelcomeCompany";
import MissionVisionContent from "../container/manufacturing/MissionVission";
import Progress from "../container/aboutpagecontainer/Progress";


class MissionVision extends Component {
    render() {
        return (
            <React.Fragment>
                <MissionVisionBreadcrumb/>
                <Welcome/>
                <MissionVisionContent/>
                <Progress/>
            </React.Fragment>
        )
    }
}

export default MissionVision;