import React, { Component } from 'react';
import ManufacturingPageBreadcrumb from "../container/breadcrumb/ManufacturingPageBreadcrumb";
import ManufacturingProcess from "../container/howwework/ManufacturingProcess";
import MerchandisingAssurance from "../container/howwework/facilities/MerchandisingAssurance";

class Manufacturing extends Component {
    render() {
        return (
            <React.Fragment>
                <ManufacturingPageBreadcrumb />
                <ManufacturingProcess />
                <MerchandisingAssurance />
            </React.Fragment>
        )
    }
}
export default Manufacturing;