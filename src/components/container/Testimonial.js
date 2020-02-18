import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import $ from "jquery";
// testimonial data
const testimonial_data = [
    {
        testimonial_img: require('../../assets/images/clients_logo/BEST-&-LESS.png'),
        testimonial_img_alt: "client logo image",

    },
    {
        testimonial_img: require('../../assets/images/clients_logo/INCITY.png'),
        testimonial_img_alt: "client logo image",

    },
    {
        testimonial_img: require('../../assets/images/clients_logo/Mau-&-Son.png'),
        testimonial_img_alt: "client logo image",

    },
    {
        testimonial_img: require('../../assets/images/clients_logo/NEW-LOOK.png'),
        testimonial_img_alt: "client logo image",

    },
    {
        testimonial_img: require('../../assets/images/clients_logo/small-cherokee-logo.png'),
        testimonial_img_alt: "client logo image",

    },
    {
        testimonial_img: require('../../assets/images/clients_logo/TXM.png'),
        testimonial_img_alt: "client logo image",

    }
]
const options = {
    loop: true,
    autoplay: true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: false,
    responsiveClass: true,
    smartSpeed: 500,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 2
        },
        786: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
}
const testimonialVariable = testimonial_data.map((single_testimonial, i) => {
    return (
        <div className="single-client" key={i}>
            <div className="single-client-img">
                <img src={single_testimonial.testimonial_img} alt={single_testimonial.testimonial_img_alt} />
            </div>
        </div>
    )
});
class Partner extends Component {
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
            useSameHeight($('.single-client'));
        }).resize();

    }
    render() {
        return (
            <section className="testimonial-area short-padding section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center">
                                <h2>Our Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 col-md-10 offset-lg-1 offset-md-1">
                            <div className="testimonial-wrapper-content">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="testimonial-carousel-wrapper">
                                            <OwlCarousel
                                                className="what-client-says-slider owl-carousel owl-theme"
                                                {...options}
                                            >
                                                {testimonialVariable}
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Partner;


