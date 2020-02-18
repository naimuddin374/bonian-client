import React, { Component } from 'react';
import ComplianceOfferingBread from '../container/breadcrumb/ComplinceOfferingBread';
import WelcomeCompliance from "../container/compliance/WelcomeCompliance";
import HowExecuteOrder from "../container/compliance/HowExecuteOrder";
import SpecificOffering from "../container/compliance/SpecificOffering";
import ControlQuality from "../container/compliance/ControlQuality";
import ManagementGuide from "../container/compliance/ManagementGuide";
import Partner from "../container/Partner";
import DownloadCertificate from "../container/compliance/DownloadCertificate";

class Compliance extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <ComplianceOfferingBread />
                <WelcomeCompliance />
                <SpecificOffering />
                <ControlQuality />
                <HowExecuteOrder />
                <ManagementGuide />
                <Partner />
                <DownloadCertificate />
            </React.Fragment>
        )
    }
}
export default Compliance