import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';

// import video 
import client_video from "../../assets/videos/MD.mp4";

// what client says data
const client_data = [
    {
        client_img: require("../../assets/images/client_says/client1.jpg"),
        client_img_alt: "client image",
        client_name: "Jannathan Doe",
        client_designation: "Manager",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../assets/images/client_says/client2.jpg"),
        client_img_alt: "client image",
        client_name: "Steven Smith",
        client_designation: "Designer",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../assets/images/client_says/client3.jpg"),
        client_img_alt: "client image",
        client_name: "Andrew Russel",
        client_designation: "Developer",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../assets/images/client_says/client4.jpg"),
        client_img_alt: "client image",
        client_name: "Golam Mostofa ",
        client_designation: "CEO at Hastechit",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../assets/images/client_says/client5.jpg"),
        client_img_alt: "client image",
        client_name: "Fozzlay Rabbi",
        client_designation: "Creative",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../assets/images/client_says/client6.jpg"),
        client_img_alt: "client image",
        client_name: "MR. Roy",
        client_designation: "Engineer",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
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
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}


// get client data
const get_client_Data = client_data.map((single_client, i) => {
    return (

        <div className="single-client-says home-slider-client-says text-center" key={i}>
            <div className="client-img">
                <img src={single_client.client_img} alt={single_client.client_img_alt} />
            </div>
            <div className="client-short-description">
                <h4>{single_client.client_name}</h4>
                <h5>{single_client.client_designation}</h5>
                <p>{single_client.client_description}</p>
            </div>
        </div>

    )
})

class WhatClientSays extends Component {
    render() {
        return (
            <section className="what-client-says-area section-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title text-center">
                                <h2 className="mb-4">What Client Says</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12 col-md-12">
                            <OwlCarousel
                                className="what-client-says-slider owl-carousel owl-theme"
                                {...options}
                            >
                                {get_client_Data}
                            </OwlCarousel>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default WhatClientSays