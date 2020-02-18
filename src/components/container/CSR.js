import React, { Component, Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { Link } from 'react-router-dom';

class DemoCsr extends Component {
    state = {
        bgImage: require("../../assets/images/largeCSR.JPG")
    }
    bgImageHandler(imgSrc) {
        this.setState({
            bgImage: imgSrc
        })
    }
    render() {
        let { bgImage } = this.state
        // csr heading content
        const csr_heading_data = {
            heading: "CSR",
            heading_text: "Impacting Society Responsibly"
        }

        let csr_image = {
            l_image: require("../../assets/images/largeCSR.JPG"),
            l_image_alt: "csr large image"
        }
        // csr thumbnail looping content
        let csr_data = [
            {
                csr_thumb: require("../../assets/images/largeCSR.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "Fresh Drinking Water Supply Employees",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
                csr_button_text: "Read More"
            },
            {
                csr_thumb: require("../../assets/images/csr_large/1.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "Step by step follow code",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
                csr_button_text: "Read More"
            },
            {
                csr_thumb: require("../../assets/images/csr_large/2.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "During the month of Ramadan, BKFL donates foods to the workers. ",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
                csr_button_text: "Read More"
            },
            {
                csr_thumb: require("../../assets/images/csr_large/3.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "In House Doctor And Medical Facilities",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
                csr_button_text: "Read More"
            },
        ]
        // get data
        let csr_content = csr_data.map((single_csr, i) => {
            return (
                <div className="single-csr-thumbnail-content" key={i}>
                    <div className="csr-thumb">
                        <img src={single_csr.csr_thumb} alt={single_csr.csr_thumb_alt} onClick={() => this.bgImageHandler(single_csr.csr_thumb)} />
                    </div>
                    <div className="csr-thumb-content">
                        <h4><Link to={`${process.env.PUBLIC_URL}/csr`}>{single_csr.csr_title}</Link></h4>

                        <p>{single_csr.csr_text}</p>
                        <Link to={`${process.env.PUBLIC_URL}/csr`} className="read-more">{single_csr.csr_button_text}</Link>
                    </div>
                </div>
            )
        })

        let bgSlider = csr_data.map((single_csr, i) => {
            return (
                <div className="csr-large-img" key={i}>
                    <img src={single_csr.csr_thumb} alt="BgImage" key={i} />
                </div>
            )
        })

        const options = {
            loop: true,
            autoplay: true,
            items: 1,
            nav: false,
            autoplayHoverPause: true,
            autoplayHoverPause: false,
            smartSpeed: 1050,
            dots: false,

            responsive: {
                0: {
                    items: 1
                },
                786: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        }

        const bgOptions = {
            loop: true,
            autoplay: true,
            items: 1,
            nav: false,
            autoplayHoverPause: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayHoverPause: false,
            dots: false,
            smartSpeed: 250,

            responsive: {
                0: {
                    items: 1
                },
                786: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        }
        return (
            <Fragment>
                <div className="csr-main-heading section-padding-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title text-center section-title-padding">
                                    <h2>{csr_heading_data.heading}</h2>
                                    <p>{csr_heading_data.heading_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="csr-area section-padding-bottom">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-6 col-md-12 no-padding non-padding">
                                <OwlCarousel className="owl-carousel owl-theme" {...bgOptions}>
                                    {bgSlider}
                                </OwlCarousel>

                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="csr-slider-area-home">

                                    <OwlCarousel
                                        className="owl-carousel owl-theme"
                                        {...options}
                                    >
                                        {csr_content}
                                    </OwlCarousel>

                                </div>
                                <Link to={`${process.env.PUBLIC_URL}/csr`} className="view-all-btn csr-view-all-btn">View All</Link>

                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default DemoCsr;