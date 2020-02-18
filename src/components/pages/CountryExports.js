import React, { Component } from 'react';
import ExportBreadcrumb from "../container/breadcrumb/ExportBreadcrumb";
import CountryExportArea from "../container/exports/CountryExportArea";

 class CountryExports extends Component {
    render() {
        return (
            <React.Fragment>
                <ExportBreadcrumb/>
                <CountryExportArea/>
            </React.Fragment>
        )
    }
}
export default CountryExports;