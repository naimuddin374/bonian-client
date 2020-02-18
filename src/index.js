import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// bootstrap css library
import '../src/assets/css/bootstrap.min.css';

// css link
import '../src/assets/css/style.css';
import '../src/assets/css/responsive.css';

// component import
import Header from './components/Navbar';
import Home from '../src/components/pages/Home';
import AboutUs from '../src/components/pages/AboutUs';
import MissionVision from '../src/components/pages/MissionVision';

import HowWeWork from '../src/components/pages/HowWeWork';

import WhyUs from './components/pages/WhyUs';
import CountryExports from '../src/components/pages/CountryExports';
import TopManagement from '../src/components/pages/TopManagement';
import ProductPage from '../src/components/pages/ProductPage';

import CompanyDetails from '../src/components/container/CompanyDetails';
import DemocsrPage from '../src/components/pages/DemocsrPage';
import CSRDetails from '../src/components/pages/CSRDetails';
import Sustainability from '../src/components/pages/Sustainability';
import Organogram from '../src/components/pages/Organogram';

import MeetTeamMember from '../src/components/pages/MeetTeamMember';
import Manufacturing from "../src/components/pages/Manufacturing";
import CompanyProfile from "../src/components/pages/CompanyProfile";


import SingleProduct from "../src/components/pages/SingleProduct";

import Compliance from '../src/components/pages/Compliance';
import FAQ from '../src/components/pages/Faq';
import Contact from '../src/components/pages/Contact';
import NotFound from './components/page404';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Home />
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Header />
            <Switch>

                <Route path={`${process.env.PUBLIC_URL}/aboutUs`} component={AboutUs} />
                <Route path={`${process.env.PUBLIC_URL}/sustainability`} component={Sustainability} />
                <Route path={`${process.env.PUBLIC_URL}/compliance`} component={Compliance} />
                <Route path={`${process.env.PUBLIC_URL}/organogram`} component={Organogram} />
                <Route path={`${process.env.PUBLIC_URL}/products`} component={ProductPage} />
                <Route path={`${process.env.PUBLIC_URL}/company-details`} component={CompanyDetails} />
                <Route path={`${process.env.PUBLIC_URL}/mission-vision`} component={MissionVision} />
                <Route path={`${process.env.PUBLIC_URL}/top-management`} component={TopManagement} />
                <Route path={`${process.env.PUBLIC_URL}/how-works`} component={HowWeWork} />
                <Route path={`${process.env.PUBLIC_URL}/why-us`} component={WhyUs} />
                <Route path={`${process.env.PUBLIC_URL}/exports`} component={CountryExports} />
                <Route path={`${process.env.PUBLIC_URL}/faq`} component={FAQ} />
                <Route path={`${process.env.PUBLIC_URL}/csr`} component={DemocsrPage} />
                <Route path={`${process.env.PUBLIC_URL}/manufacturing`} component={Manufacturing} />
                <Route path={`${process.env.PUBLIC_URL}/team-member`} component={MeetTeamMember} />
                <Route path={`${process.env.PUBLIC_URL}/company-profile`} component={CompanyProfile} />
                <Route path={`${process.env.PUBLIC_URL}/csr-details`} component={CSRDetails} />
                <Route path={`${process.env.PUBLIC_URL}/single-product`} component={SingleProduct} />
                <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />

                <Route path={`${process.env.PUBLIC_URL}/`} exact component={App} />
                <Route path="*" component={NotFound} />

            </Switch>
            <Footer />

        </React.Fragment>
    </BrowserRouter>

    , document.getElementById('root'));
