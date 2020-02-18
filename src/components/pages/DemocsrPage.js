import React, { Component, Fragment } from 'react';
// import Slider from "react-slick";
import Ethical from "../container/breadcrumb/ResponsibilitiesBreadcrumb";
import CustomScroll from "react-custom-scroll";
import "../../assets/css/customScroll.css";
import $ from "jquery";

class DemocsrPage extends Component {
    state = {
        allCardData: [
            {
                csr_thumb: require("../../assets/images/largeCSR.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "Fresh Drinking Water Supply Employees",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
            },
            {
                csr_thumb: require("../../assets/images/csr_large/csr1.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "Step by step follow code",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
            },
            {
                csr_thumb: require("../../assets/images/csr_large/csr2.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "Separate Toilet Facilities For Both Gents",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
            },
            {
                csr_thumb: require("../../assets/images/csr_large/csr3.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "In House Doctor And Medical Facilities",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
            },
            {
                csr_thumb: require("../../assets/images/csr_large/csr4.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "In House Doctor And Medical Facilities",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
            },
            {
                csr_thumb: require("../../assets/images/csr_large/csr5.JPG"),
                csr_thumb_alt: "csr thumbnail",
                csr_title: "In House Doctor And Medical Facilities",
                csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
            },

        ],
        singleCardData: {
            csr_thumb: require("../../assets/images/largeCSR.JPG"),
            csr_title: "Fresh Drinking Water Supply Employees",
            csr_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam doloresLorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum non amet molestiae veniam dolores",
        }
    }
    bgContentHandler(data) {
        this.setState({
            singleCardData: { ...data }
        })
    }
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
        let { singleCardData, allCardData } = this.state
        // csr thumbnail looping content
        return (
            <Fragment>
                <Ethical />
                <div className="csr-area-page section-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                                <div className="section-title section-title-padding text-center">
                                    <h2>Corporate Social Responsibility</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="thumb-container">
                                    <div className="csr-large-image">
                                        <img src={singleCardData.csr_thumb} alt="BgImage" />
                                    </div>
                                    <div className="thumb-content-csr">
                                        <h3>{singleCardData.csr_title}</h3>
                                        <p>{singleCardData.csr_text}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="csr-slider-area-right">
                                    <CustomScroll heightRelativeToParent="calc(100% - 150px)">
                                        {Object.keys(allCardData).length !== 0 &&
                                            allCardData.map((item, i) => (
                                                <div className="single-csr-thumbnail-content" key={i}>
                                                    <div className="csr-thumb">
                                                        <img src={item.csr_thumb} alt={item.csr_thumb} onClick={() => this.bgContentHandler(item)} />
                                                    </div>
                                                    <div className="csr-thumb-content">
                                                        <h4 onClick={() => this.bgContentHandler(item)}>{item.csr_title}</h4>
                                                        <p>{item.csr_text.substring(0, 100)}</p>
                                                        <button onClick={() => this.bgContentHandler(item)} className="read-more">Read More</button>
                                                    </div>
                                                </div>
                                            ))}
                                    </CustomScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DemocsrPage;