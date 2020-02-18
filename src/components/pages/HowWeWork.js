import React, { Component } from 'react';
import ManufacturingBreadcrumb from "../container/breadcrumb/WhatWeWorkBreadcrumb";
import FactoryFacilities from "../container/howwework/facilities/FactoryFacilities";
import SetUsApart from "../container/howwework/setapart/SetUsApart";
import DepartmentBonian from "../container/howwework/facilities/DepartmentBonian";
import MoreInfoWhyUs from "../container/whyus/MoreInfoWhyUs";

// import from "../container/howwework/facilities/DepartmentBonian";

import StickyButton from "../container/StickyButton";



class HowWeWork extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <ManufacturingBreadcrumb />
                <SetUsApart />
                <FactoryFacilities />
                <DepartmentBonian />
                <MoreInfoWhyUs />
                <StickyButton />
            </React.Fragment>
        )
    }

}
export default HowWeWork;