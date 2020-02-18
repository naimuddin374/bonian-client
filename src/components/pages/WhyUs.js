import React, { Component } from 'react';
import WorkBreadcrumb from "../container/breadcrumb/WorkBreadcrumb";
import WhatwedoContent from "../container/whyus/WhatwedoContent";
import CustomerLove from "../container/whyus/CustomerLove";
import WhatWeOffer from "../container/whyus/WhatWeOffer";
import StickyButton from "../container/StickyButton";

class WhyUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <WorkBreadcrumb />
                <WhatwedoContent />
                <CustomerLove />
                <WhatWeOffer />
                <StickyButton />
            </React.Fragment>
        )
    }
}
export default WhyUs;
