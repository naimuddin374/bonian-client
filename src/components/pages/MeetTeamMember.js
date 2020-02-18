import React, { Component } from 'react';
import TeamSlider from "../container/TeamMemberOther/TeamSlider";
import WhatClientSayAll from "../container/TeamMemberOther/WhatClientSayAll";

class MeetTeamMember extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <TeamSlider />
                <WhatClientSayAll />
            </React.Fragment>
        )
    }
}
export default MeetTeamMember