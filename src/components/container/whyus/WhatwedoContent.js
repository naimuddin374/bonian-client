import React, { Component } from 'react';
import $ from 'jquery';

const what_we_do_data = {
    title: "Our Strengths",
    section_content: "From business and sample development to committed on time delivery, Bonian Knit Fashion has the following customer friendly characteristic for which you will Definitely love us:",
    working_group: [
        {
            working_title: "Compliance Certified",
            working_icon: require("../../../assets/images/work_img/1.png")
        },
        {
            working_title: "Versatile Manufacturing",
            working_icon: require("../../../assets/images/work_img/2.png")
        },
        {
            working_title: "Best Quality",
            working_icon: require("../../../assets/images/work_img/3.png")
        },
        {
            working_title: "Competitive Price",
            working_icon: require("../../../assets/images/work_img/4.png")
        },
        {
            working_title: "Commitment",
            working_icon: require("../../../assets/images/work_img/5.png")
        },
        {
            working_title: "Innovative Design",
            working_icon: require("../../../assets/images/work_img/3.png")
        },
        {
            working_title: "Fast Sample Development",
            working_icon: require("../../../assets/images/work_img/7.png")
        },
        {
            working_title: "Customized Service",
            working_icon: require("../../../assets/images/work_img/8.png")
        },
    ]
}

class WhatwedoContent extends Component {
    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-md-2 offset-lg-2">
                            <div className="section-title section-title-padding text-center">
                                <h2 className="pb-4">{what_we_do_data.title}</h2>
                                <p>{what_we_do_data.section_content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {
                            what_we_do_data.working_group.map((single_working, i) => (
                                <div className="col-lg-3 col-md-6" key={i}>
                                    <div className="single-working-part text-center">
                                        <div className="single-img">
                                            <img src={single_working.working_icon} alt="working icon" />
                                        </div>
                                        <div className="single-work-content">
                                            <h4>{single_working.working_title}</h4>
                                        </div>
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
export default WhatwedoContent;