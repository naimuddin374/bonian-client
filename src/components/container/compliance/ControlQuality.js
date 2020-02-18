import React, { Component } from 'react';

// all data control quality
const control_quality_group = {
    section_title: "How We Control Quality & Our Inspection Procedure",
    control_quality_group_content: [
        {
            icon: "fa fa-user",
            title: "Hand over the order"
        },
        {
            icon: "fa fa-file",
            title: "Pre Production Sample"
        },
        {
            icon: "fa fa-book",
            title: "Pre production meeting"
        },
        {
            icon: "fa fa-search",
            title: "Inspections"
        },
        {
            icon: "fa fa-window-restore",
            title: "Project Quality"
        },
        {
            icon: "fa fa-file-video-o",
            title: "Motivation"
        },
        {
            icon: "fa fa-shopping-cart",
            title: "Online Payment"
        },
        {
            icon: "fa fa-building",
            title: "Foundation"
        },
    ]
}

class ControlQuality extends Component {
    render() {
        return (
            <section className="control-quality-area section-padding theme-color-section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title text-center section-title-padding">
                                <h2 className="text-white">{control_quality_group.section_title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            control_quality_group.control_quality_group_content.map((single_quality, i) => (
                                <div className="col-lg-3 col-md-6" key={i}>
                                    <div className="single-control-quality-procedure text-center">
                                        <i className={single_quality.icon}></i>
                                        <h3>{single_quality.title}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}
export default ControlQuality