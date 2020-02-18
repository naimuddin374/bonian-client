import React, { Component } from 'react';

// import home page components
import Slider from "../container/Slider";
import Partner from "../container/Partner";
import OurCompany from "../container/OurCompany";
import Services from "../container/Services";
import CounterUp from "../container/CounterUp";
import Products from "../container/Products";
import CSR from "../container/CSR";
import Testimonial from "../container/Testimonial";
import ClientSays from "../container/WhatClientSays";
import OfficeAddress from "../container/OfficeAddress";


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <OurCompany />
                <Services />
                <CounterUp />
                <Products />
                <ClientSays />
                <Testimonial />
                <Partner />
                <CSR />
                <OfficeAddress />
            </React.Fragment>
        )
    }
}
export default Home;