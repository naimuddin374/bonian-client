import React, { Component } from 'react';
import DownloadBreadcrumb from "../container/breadcrumb/DownloadBreadcrumb";
import DownloadFiles from "../../components/container/DownloadFiles";

class Download extends Component {
    render() {
        return (
            <React.Fragment>
                <DownloadBreadcrumb/>
                <DownloadFiles/>
            </React.Fragment>
        )
    }
}
export default Download;