import React, { Component } from 'react';

import OrganogramBreadcrumb from "../container/breadcrumb/OrganogramBreadcrumb";

// organogram data
const organogram_data = {
    title: "Our Organogram",
    or_img: require("../../assets/images/organogram.png"),
    or_img_alt: "organogram image",
    or_content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laboriosam a non maxime nesciunt? Fugit, culpa, ut dignissimos dolorem labore placeat non architecto veniam assumenda aliquam ipsa, fuga distinctio corrupti!"
}

class Organogram extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <OrganogramBreadcrumb />
                <section className="organogram-area short-section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title section-title-padding text-center">
                                    <h2 className="">{organogram_data.title}</h2>
                                    <p>{organogram_data.or_content}</p>
                                    <img className="organogram-img" src={organogram_data.or_img} alt={organogram_data.or_img_alt} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Organogram