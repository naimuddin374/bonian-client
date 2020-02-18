import React, { Component } from 'react';
import Mission from "../manufacturing/Mission";
import Vision from "../manufacturing/Vision";

class MissionVission extends Component {
    render() {
        return (
            <section className="mission-vision-area">
                <div className="container-fluid">
                    <div className="row no-padding section-bg align-items-center mission-vision-padding">
                        <Mission />
                    </div>
                    <div className="row section-bg align-items-center mission-vision-padding">
                        <Vision />
                    </div>
                </div>
            </section>
        )
    }
}
export default MissionVission;
