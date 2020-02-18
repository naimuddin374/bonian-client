import React, { Component } from 'react';
import { Link } from "react-router-dom";

import sample from '../../assets/videos/bonian_bg.mp4';


const header_slider_data = [
    {
        banner_title_one: "Complete Knitwear Solutions",
        banner_quote: "Bonian Knit Fashions Ltd",
        banner_content_one: "A vertically integrated knitwear manufacturing and export-oriented firm known for excellence.",
        banner_content_two: "manufacturing unit Lorem ipsum dolor.",
        banner_btn: "Contact Us"
    },

]

const all_slider_item = header_slider_data.map((single_header_slider, i) => {
    return (
        <div className="single-slider" key={i}>
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div className="container">
                <div className="mid-content">
                    <h1 className="pb-3">{single_header_slider.banner_title_one}</h1>

                    <span>{single_header_slider.banner_quote}</span>

                    <p className="text-white pb-5">{single_header_slider.banner_content_one} <br /> {single_header_slider.banner_content_two}</p>

                    <Link to={`${process.env.PUBLIC_URL}/mission-vision`} className="theme-btn">{single_header_slider.banner_btn}</Link>

                </div>
            </div>
        </div>
    )
});

class SliderCom extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="slider-area" id="home">
                <div className="welcome-overlay"></div>
                {all_slider_item}
            </div>
        )
    }

}

export default SliderCom;