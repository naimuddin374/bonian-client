import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import $ from "jquery";

const Bonian_glance_Data = [
    {
        name: "No.of Workers:",
        value: "502"
    },
    {
        name: "Official Staffs:",
        value: "20"
    },
    {
        name: "Floor space:",
        value: "15000 sq.ft."
    },
    {
        name: "Warehouse space:",
        value: "5000 sq. ft."
    },
    {
        name: "Office space:",
        value: "4000 sq. ft."
    },
    {
        name: "Compliance section:",
        value: "2000 sq. ft."
    },
    {
        name: "Sample section:",
        value: "1500 sq. ft."
    },
    {
        name: "Fuel Generator:",
        value: "Energy Pack 200 KV"
    },
    {
        name: "Production Capacity:",
        value: "T-shirt 7000 pc per day"
    },
    {
        name: "No.of Workers:",
        value: "502"
    },
    {
        name: "Official Staffs:",
        value: "20"
    },
    {
        name: "Floor space:",
        value: "15000 sq.ft."
    },
    {
        name: "Warehouse space:",
        value: "5000 sq. ft."
    },
    {
        name: "Office space:",
        value: "4000 sq. ft."
    },
    {
        name: "No.of Workers:",
        value: "502"
    },
    {
        name: "Official Staffs:",
        value: "20"
    },
];

class BonianGlance extends Component {

    // same height bonian glance
    componentDidMount() {
        function useSameHeight(el) {
            var max = 0;
            el.css('height', 'auto');
            el.each(function () {
                max = Math.max(max, $(this).height());
            }).height(max);
            return el;
        }
        $(window).resize(function () {
            useSameHeight($('.single-bonian-glance'));
        }).resize();
    }

    render() {
        return (
            <section className="bonian-glance-merchan section-padding">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center">
                                <h2>Bonian at a glance</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            Bonian_glance_Data.map((single_glance, i) => (
                                <Fade up key={i}>
                                    <div className="col-lg-3 col-md-4">
                                        <div className="single-bonian-glance">
                                            <div className="glance-inner-content text-center">
                                                <span>{single_glance.name}</span>
                                                <h3>{single_glance.value}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>

                            ))
                        }
                    </div>

                </div>
            </section>
        )
    }
}
export default BonianGlance;