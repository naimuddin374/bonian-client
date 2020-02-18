
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { Link } from "react-router-dom";

class Products extends Component {

    render() {

        return (
            <section className="product-area home-page-product-content section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                            <div className="section-title text-center section-title-padding">
                                <h2>Our Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 relative">
                            <div className="product-wrapper-content">
                                <OwlCarousel
                                    className="owl-carousel owl-theme"
                                    {...options}
                                >
                                    {ProductVariable}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 text-center">
                            <Link to={`${process.env.PUBLIC_URL}/products`} className="theme-btn mt-5">View All Products</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Products;

// all product
const Product_data = [
    {
        product_img: require('../../assets/images/all_products/boys/1.PNG'),
        product_img_alt: "bonian product image",
        product_name: "Men Hoodie",
    },
    {
        product_img: require('../../assets/images/all_products/boys/9.png'),
        product_img_alt: "bonian product image",
        product_name: "Men Hoodie",
    },
    {
        product_img: require('../../assets/images/all_products/girls/1.PNG'),
        product_img_alt: "bonian product image",
        product_name: "Men Hoodie",
    },
    {
        product_img: require('../../assets/images/all_products/girls/2.png'),
        product_img_alt: "bonian product image",
        product_name: "Men Hoodie",
    },
    {
        product_img: require('../../assets/images/all_products/ladieswear/1.png'),
        product_img_alt: "bonian product image",
        product_name: "Men Hoodie",
    },
    {
        product_img: require('../../assets/images/all_products/ladieswear/2.png'),
        product_img_alt: "bonian product image",
        product_name: "Men Hoodie",
    },
    {
        product_img: require('../../assets/images/all_products/menswear/1.png'),
        product_img_alt: "bonian product image",
        product_name: "Men Hoodie",
    },
    {
        product_img: require('../../assets/images/all_products/menswear/2.png'),
        product_img_alt: "bonian product image",
        product_name: "Men Hoodie"
    },
]

// owl carousel product options
const options = {
    loop: true,
    autoplay: true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: false,
    responsiveClass: true,
    dots: false,
    dragEndSpeed: true,
    smartSpeed: 250,
    autoplaySpeed: 250,
    responsive: {
        0: {
            items: 2
        },
        786: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
}

// product products looping
const ProductVariable = Product_data.map((single_product, i) => {
    return (
        <div className="single-product text-center" key={i}>
            <div className="product-img">
                <img src={single_product.product_img} alt={single_product.product_img_alt} />
            </div>
            <div className="product-inner-content">
                <h5 className="bonian-product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}>{single_product.product_name}</Link></h5>
            </div>
        </div>
    )
});