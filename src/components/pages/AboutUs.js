import React, { Component } from 'react';
import WelcomeCompany from "../container/aboutpagecontainer/WelcomeCompany";
import AboutBreadcrumb from "../container/breadcrumb/AboutBreadcrumb";
import Progress from "../container/aboutpagecontainer/Progress";

class AboutUs extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <React.Fragment>
                <AboutBreadcrumb/>
                <WelcomeCompany/>
                <Progress/>
            </React.Fragment>
        )
    }

}
export default AboutUs;