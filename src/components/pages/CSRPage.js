import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Ethical from "../container/breadcrumb/ResponsibilitiesBreadcrumb";
import $ from "jquery";

// csr data
const csr_data = [
    {
        csr_img: require("../../assets/images/csr_large/1.JPG"),
        csr_img_alt: "csr image",
        csr_title: "No bonded labor",
        csr_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam, pariatur fugit culpa ex labore deserunt quas cupiditate expedita perferendis!",
        csr_button: "Read More"
    },
    {
        csr_img: require("../../assets/images/csr_large/2.JPG"),
        csr_img_alt: "csr image",
        csr_title: "Freedom of association",
        csr_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam, pariatur fugit culpa ex labore deserunt quas cupiditate expedita perferendis!",
        csr_button: "Read More"
    },
    {
        csr_img: require("../../assets/images/csr_large/3.JPG"),
        csr_img_alt: "csr image",
        csr_title: "Safe working conditions",
        csr_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam, pariatur fugit culpa ex labore deserunt quas cupiditate expedita perferendis!",
        csr_button: "Read More"
    },
    {
        csr_img: require("../../assets/images/csr_large/6.JPG"),
        csr_img_alt: "csr image",
        csr_title: "No child labor",
        csr_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam, pariatur fugit culpa ex labore deserunt quas cupiditate expedita perferendis!",
        csr_button: "Read More"
    },
    {
        csr_img: require("../../assets/images/csr_large/1.JPG"),
        csr_img_alt: "csr image",
        csr_title: "No bonded labor",
        csr_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam, pariatur fugit culpa ex labore deserunt quas cupiditate expedita perferendis!",
        csr_button: "Read More"
    },
    {
        csr_img: require("../../assets/images/csr_large/2.JPG"),
        csr_img_alt: "csr image",
        csr_title: "Freedom of association",
        csr_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam, pariatur fugit culpa ex labore deserunt quas cupiditate expedita perferendis!",
        csr_button: "Read More"
    },
    {
        csr_img: require("../../assets/images/csr_large/3.JPG"),
        csr_img_alt: "csr image",
        csr_title: "Safe working conditions",
        csr_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id aliquam, pariatur fugit culpa ex labore deserunt quas cupiditate expedita perferendis!",
        csr_button: "Read More"
    },
]

// get the csr data
const get_data = csr_data.map((single_csr_data, i) => {
    return (
        <div className="col-lg-6 col-md-6" key={i}>
            <Fade up>
                <div className="single-csr-content">
                    <img src={single_csr_data.csr_img} alt={single_csr_data.csr_img_alt} />
                    <div className="csr-inner-text-content">
                        <Link to={`${process.env.PUBLIC_URL}/csr-details`} className="single-csr-title">{single_csr_data.csr_title}</Link>
                        <p>{single_csr_data.csr_text}</p>
                        <Link to={`${process.env.PUBLIC_URL}/csr-details`} className="read-more">{single_csr_data.csr_button}</Link>
                    </div>
                </div>
            </Fade>
        </div>
    )
});
class CSRPage extends Component {
    componentDidMount() {
        // same height
        function useSameHeight(el) {
            var max = 0;
            el.css('height', 'auto');
            el.each(function () {
                max = Math.max(max, $(this).height());
            }).height(max);
            return el;
        }
        $(window).resize(function () {
            useSameHeight($('.csr-inner-text-content p'));
        }).resize();
        // top loading
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <React.Fragment>
                <Ethical />
                <section className="csr-area-page-content section-padding">
                    <div className="container">
                        <div className="row">
                            {get_data}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default CSRPage;

