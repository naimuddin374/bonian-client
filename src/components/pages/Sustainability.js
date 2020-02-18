import React, { Component } from 'react';
import EcoFriendly from "../container/sustainability/EcoFriendly";
import SustainabilityBreadcrumb from "../container/breadcrumb/SustainabilityBreadcrumb";
import EcoManufacturingCycle from "../container/sustainability/EcoManufacturingCycle";
import SustainabilityGoal from "../container/sustainability/SustainabilityGoal";
import SustainabilityAmbition from "../container/sustainability/SustainabilityAmbition";
import SustainabilityPolicy from "../container/sustainability/SustainabilityPolicy";
import SustainabilityLogoPortion from "../container/sustainability/SustainabilityLogoPortion";
import StickyButton from "../container/StickyButton";

class Sustainability extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <SustainabilityBreadcrumb />
                <SustainabilityGoal />
                <SustainabilityAmbition />
                <EcoFriendly />
                <SustainabilityLogoPortion />
                <SustainabilityPolicy />
                <EcoManufacturingCycle />
                <StickyButton />
            </React.Fragment>
        )
    }
}
export default Sustainability;
