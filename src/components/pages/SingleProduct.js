import React, { Component } from 'react';
import RelatedProduct from "../container/RelatedProduct";
import SingleProductBreadcrumb from "../container/breadcrumb/SingleProductBreadcrumb";

const single_Product_data =
{
    large_product_img: require('../../assets/images/large_product.JPG'),
    product_img_alt: "bonian product image",
    product_name: "Men Hoodie",
}

class SingleProduct extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <SingleProductBreadcrumb />
                <section className="single-product-page-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="single-product-page-wrapper">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="single-product-show">
                                                <img src={single_Product_data.large_product_img} alt={single_Product_data.product_img_alt} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="product-details-description">
                                                <h2 className="product-name">Men Hoodlie</h2>
                                                <div className="customer-review pb-3">
                                                    <ul>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                    <span>(customer reviews)</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam omnis reprehenderit inventore nam nemo error autem animi minima sed consequatur.</p>
                                                <div className="product-quantity mt-4">
                                                    <p>Product Ref: <span>GH78</span></p>
                                                    <p>Product Type: <span>Polo Shirt</span></p>
                                                    <p> ProductFabrication : <span>1000% Cotton</span></p>
                                                    <p>Product GSM : <span>340</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="product-details mt-5">
                                                <h3 className="pb-3">Product Description : </h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero est atque neque doloribus, et veritatis eligendi esse ratione deleniti nesciunt excepturi placeat ipsam repudiandae explicabo alias, laborum architecto. Quis commodi veniam deleniti natus veritatis adipisci unde aliquam hic ex obcaecati reprehenderit alias tenetur magnam facilis harum voluptatem, beatae quo placeat pariatur molestias error, laudantium maiores! Esse, maiores? Repellat, eveniet! Consequatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dicta repellat autem, dolorem quisquam odio facere totam consectetur quas, culpa esse labore nostrum, possimus officia ducimus minus! Facere, voluptatum odit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <RelatedProduct />

            </React.Fragment>
        )
    }
}

export default SingleProduct;