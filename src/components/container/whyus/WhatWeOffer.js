import React, { Component } from 'react';
import { Link } from "react-router-dom";

// what we offer data

const what_offer_data = {
    section_title: "WHAT WE OFFER",
    section_heading_text_1: "With the state of art manufacturing facilities, Bonian provides quality knit garments and making a progressive strong impression in the Fashion Business of the world.",
    what_we_offer_group: [
        {
            product_img: require("../../../assets/images/all_products/boys/1.PNG"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/girls/1.PNG"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/ladieswear/10.jpg"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/menswear/1.png"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/girls/3.png"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/boys/3.png"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/boys/6.png"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/menswear/4.png"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/menswear/9.jpg"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/boys/7.png"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/girls/5.png"),
            product_img_alt: "product image"
        },
        {
            product_img: require("../../../assets/images/all_products/ladieswear/7.jpg"),
            product_img_alt: "product image"
        },
    ]
}

class WhatWeOffer extends Component {
    render() {
        return (
            <section className="what-we-offer-area section-padding">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                            <div className="section-title section-title-padding text-center">
                                <h2 className="pb-4">{what_offer_data.section_title}</h2>
                                <p>{what_offer_data.section_heading_text_1}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {
                            what_offer_data.what_we_offer_group.map((single_product, i) => (
                                <div className="col-lg-2 col-md-3" key={i}>
                                    <div className="what-we-offer-single-product">
                                        <img src={single_product.product_img} alt={single_product.product_img_alt} />
                                    </div>
                                </div>
                            ))

                        }

                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="view-all-product-content text-center mt-5">
                                <Link to="/products" className="theme-btn">View All Products</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhatWeOffer;