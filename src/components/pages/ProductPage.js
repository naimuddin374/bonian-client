import React, { Component } from 'react';
import $ from "jquery";
import { Link } from "react-router-dom";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import ProductBreadcrumb from "../container/breadcrumb/ProductBreadcrumb";


//  fabrication list image
import img1 from "../../assets/images/fabrication/1.png";
import img2 from "../../assets/images/fabrication/2.png";
import img3 from "../../assets/images/fabrication/3.png";
import img4 from "../../assets/images/fabrication/4.png";

// all product
const all_Product_data = [
    {
        id: 1,
        product_img: require('../../assets/images/all_products/boys/1.PNG'),
        product_img_alt: "bonian product image",
        product_name: "Knit T-Shirt",
        product_category: "men",
        popup_product: require('../../assets/images/all_products/boys/1.PNG'),
    },
    {
        id: 4,
        product_img: require('../../assets/images/all_products/boys/9.png'),
        product_img_alt: "bonian product image",
        product_name: "Tang Top",
        product_category: "women",
        popup_product: require('../../assets/images/all_products/boys/9.png'),
    },
    {
        id: 13,
        product_img: require('../../assets/images/all_products/girls/1.PNG'),
        product_img_alt: "bonian product image",
        product_name: "Sports Wear",
        product_category: "kidswear",
        popup_product: require('../../assets/images/all_products/girls/1.PNG'),
    },
    {
        id: 14,
        product_img: require('../../assets/images/all_products/girls/2.png'),
        product_img_alt: "bonian product image",
        product_name: "T-Shirt",
        product_category: "tShirt",
        popup_product: require('../../assets/images/all_products/girls/2.png'),
    },

    {
        id: 15,
        product_img: require('../../assets/images/all_products/ladieswear/1.png'),
        product_img_alt: "bonian product image",
        product_name: "Polo Shirt",
        product_category: "polotShirt",
        popup_product: require('../../assets/images/all_products/ladieswear/1.png'),
    },
    {
        id: 16,
        product_img: require('../../assets/images/all_products/ladieswear/2.png'),
        product_img_alt: "bonian product image",
        product_name: "Tank Top",
        product_category: "tank",
        popup_product: require('../../assets/images/all_products/ladieswear/2.png'),
    },

    {
        id: 17,
        product_img: require('../../assets/images/all_products/menswear/1.png'),
        product_img_alt: "bonian product image",
        product_name: "Sweat Jacket",
        product_category: "jacket",
        popup_product: require('../../assets/images/all_products/menswear/1.png'),
    },
    {
        id: 18,
        product_img: require('../../assets/images/all_products/menswear/2.png'),
        product_img_alt: "bonian product image",
        product_name: "Sweat Jacket",
        product_category: "jacket",
        popup_product: require('../../assets/images/all_products/menswear/2.png'),
    },
    {
        id: 19,
        product_img: require('../../assets/images/all_products/boys/4.png'),
        product_img_alt: "bonian product image",
        product_name: " Sweat Shirt",
        product_category: "sweatShirt",
        popup_product: require('../../assets/images/all_products/boys/4.png'),
    },

    {
        id: 20,
        product_img: require('../../assets/images/all_products/girls/4.png'),
        product_img_alt: "bonian product image",
        product_name: "Sweat Pant",
        product_category: "sweatPant",
        popup_product: require('../../assets/images/all_products/girls/4.png'),
    },

    {
        id: 21,
        product_img: require('../../assets/images/all_products/ladieswear/3.jpg'),
        product_img_alt: "bonian product image",
        product_name: "Trouser",
        product_category: "Trouser",
        popup_product: require('../../assets/images/all_products/ladieswear/3.jpg'),
    },

    {
        id: 22,
        product_img: require('../../assets/images/all_products/menswear/3.png'),
        product_img_alt: "bonian product image",
        product_name: "Jogging Pant",
        product_category: "Jogging_Pant",
        popup_product: require('../../assets/images/all_products/menswear/3.png'),
    },
    {
        id: 23,
        product_img: require('../../assets/images/all_products/boys/7.png'),
        product_img_alt: "bonian product image",
        product_name: "pyjama",
        product_category: "pyjama",
        popup_product: require('../../assets/images/all_products/boys/7.png'),
    },

    {
        id: 24,
        product_img: require('../../assets/images/all_products/girls/5.png'),
        product_img_alt: "bonian product image",
        product_name: "sleepwear",
        product_category: "sleepwear",
        popup_product: require('../../assets/images/all_products/girls/5.png'),
    },

    {
        id: 25,
        product_img: require('../../assets/images/all_products/ladieswear/9.png'),
        product_img_alt: "bonian product image",
        product_name: "Tunic",
        product_category: "Tunic",
        popup_product: require('../../assets/images/all_products/ladieswear/9.png'),
    },

    {
        id: 26,
        product_img: require('../../assets/images/all_products/menswear/7.png'),
        product_img_alt: "bonian product image",
        product_name: "Dress",
        product_category: "Dress",
        popup_product: require('../../assets/images/all_products/menswear/7.png'),
    },

    {
        id: 27,
        product_img: require('../../assets/images/all_products/boys/9.png'),
        product_img_alt: "bonian product image",
        product_name: "body shape wear",
        product_category: "body_shape_wear",
        popup_product: require('../../assets/images/all_products/boys/9.png'),
    },

    {
        id: 28,
        product_img: require('../../assets/images/all_products/girls/2.png'),
        product_img_alt: "bonian product image",
        product_name: "bottoms",
        product_category: "Bottoms",
        popup_product: require('../../assets/images/all_products/girls/2.png'),
    },

    {
        id: 29,
        product_img: require('../../assets/images/all_products/ladieswear/10.jpg'),
        product_img_alt: "bonian product image",
        product_name: "Ladies Tops",
        product_category: "Ladies_Tops",
        popup_product: require('../../assets/images/all_products/ladieswear/10.jpg'),
    },
    {
        id: 30,
        product_img: require('../../assets/images/all_products/menswear/7.png'),
        product_img_alt: "bonian product image",
        product_name: "underwear",
        product_category: "underwear",
        popup_product: require('../../assets/images/all_products/menswear/7.png'),
    }
];
// all data show
const get_all_product_data = all_Product_data.slice(0, 12).map((single_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_product.product_img} alt={single_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}>{single_product.product_name}</Link></h5>
                </div>
            </div>
        </div>
    )
});

// men product filtering
const men_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "men"
});
const get_men_product = men_product.map((single_man_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_man_product.product_img} alt={single_man_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_man_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// women product filtering
const women_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "women"
});
const get_women_product = women_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

//  kidswear product filtering,
const kidswear_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "kidswear"
});
const get_kidswear_product = kidswear_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// T-shirt product filtering
const tShirt_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "tShirt"
});
const get_tShirt_product = tShirt_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// polo t-shirt
const polo_T_shirt_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "polotShirt"
});
const get_polo_t_Shirt_product = polo_T_shirt_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// tank top
const tank_top_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "tank"
});
const get_tank_top_product = tank_top_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// Sweat Jacket
const jacket_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "jacket"
});
const get_jacket_product = jacket_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// sweat shirt
const sweat_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "sweatShirt"
});
const get_sweat_shirt_product = sweat_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// Sweat Pant
const sweat_pant_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "sweatPant"
});
const get_sweat_pant_product = sweat_pant_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// Trouser 
const Trouser_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "Trouser"
});
const get_Trouser_product = Trouser_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// Jogging Pant
const Jogging_Pant_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "Jogging_Pant"
});
const get_Jogging_Pant_product = Jogging_Pant_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// pyjama
const pyjama_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "pyjama"
});
const get_pyjama_product = pyjama_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// pyjama
const sleepwear_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "sleepwear"
});
const get_sleepwear_product = sleepwear_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// Tunic
const Tunic_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "Tunic"
});
const get_Tunic_product = Tunic_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// Dress
const Dress_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "Dress"
});
const get_Dress_product = Dress_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// body shape wear 
const body_shape_wear_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "body_shape_wear"
});
const get_body_shape_wear_product = body_shape_wear_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// bottoms
const bottoms_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "Bottoms"
});
const get_bottoms_product = bottoms_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// Ladies Tops
const Ladies_Tops_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "Ladies_Tops"
});
const get_Ladies_Tops_product = Ladies_Tops_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

// underwear
const underwear_product = all_Product_data.filter((single_product, i) => {
    return single_product.product_category === "Ladies_Tops"
});
const get_underwear_product = underwear_product.map((single_women_product, i) => {
    return (
        <div className="col-lg-4 col-md-6" key={i}>
            <div className="bonian-single-product-content">
                <div className="bonian-product-img">
                    <img src={single_women_product.product_img} alt={single_women_product.product_img_alt} />
                </div>
                <div className="bonian-product-content">
                    <h5 className="product-name"><Link to={`${process.env.PUBLIC_URL}/single-product`}></Link>{single_women_product.product_name}</h5>
                </div>
            </div>
        </div>
    )
});

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popup: false
        }
    }
    viewpopup() {
        this.setState({
            popup: true
        })
    }

    componentDidMount() {
        $(window).on('load', function () {
            // single product content height
            function useSameHeight(el) {
                var max = 0;
                el.css('height', 'auto');
                el.each(function () {
                    var c = this;
                    max = Math.max(max, $(c).height());
                }).height(max);
                return el;
            }
            $(window).resize(function () {
                useSameHeight($('.bonian-product-img'));
            }).resize();

            // single fabrication content height

            function singleFabricationHeight(el) {
                var max = 0;
                el.css('height', 'auto');
                el.each(function () {
                    var c = this;
                    max = Math.max(max, $(c).height());
                }).height(max);
                return el;
            }
            $(window).resize(function () {
                singleFabricationHeight($('.single-fabrication'));
            }).resize();
        })
        // scroll top
        window.scrollTo(0, 0);
    };
    render() {

        return (
            <React.Fragment>
                <ProductBreadcrumb />
                <section className="product-page-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title section-title-padding text-center">
                                    <h2>Our Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">

                                <Tab.Container id="left-tabs-example" defaultActiveKey="all">
                                    <Row>
                                        <Col sm={4}>

                                            <Nav variant="pills" className="flex-column all-product-content-area single-product-widget">
                                                <h5 className="product-widget-heading text-center">Product Categories</h5>

                                                <Nav.Item className="product-category-item" id="all-product">
                                                    <Nav.Link eventKey="all">All</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="men-product">
                                                    <Nav.Link eventKey="men">Menswear</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="women-product">
                                                    <Nav.Link eventKey="women">Ladieswear</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="kidswear-product">
                                                    <Nav.Link eventKey="kidswear">Kidswear</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="tShirt-product">
                                                    <Nav.Link eventKey="tShirt">T-shirt</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="polo-T-Shirt-product">
                                                    <Nav.Link eventKey="polotShirt">Polo T-Shirt</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="tank-product">
                                                    <Nav.Link eventKey="tank">Tank Top</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="jacket-product">
                                                    <Nav.Link eventKey="jacket">Sweat Jacket</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="sweat-shirt-product">
                                                    <Nav.Link eventKey="sweatShirt">Sweat Shirt</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="sweat-pant-product">
                                                    <Nav.Link eventKey="sweatPant">Sweat Pant</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="Trouser-product">
                                                    <Nav.Link eventKey="Trouser">Trouser</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="jogging-pant-product">
                                                    <Nav.Link eventKey="Jogging">Jogging Pant</Nav.Link>
                                                </Nav.Item>


                                                <Nav.Item className="product-category-item" id="pyjama-product">
                                                    <Nav.Link eventKey="pyjama">pyjama</Nav.Link>
                                                </Nav.Item>


                                                <Nav.Item className="product-category-item" id="sleepwear-product">
                                                    <Nav.Link eventKey="sleepwear">sleepwear</Nav.Link>
                                                </Nav.Item>


                                                <Nav.Item className="product-category-item" id="tunic-product">
                                                    <Nav.Link eventKey="Tunic">Tunic</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="dress-product">
                                                    <Nav.Link eventKey="Dress">Dress</Nav.Link>
                                                </Nav.Item>

                                                <Nav.Item className="product-category-item" id="body-product">
                                                    <Nav.Link eventKey="body_shape_wear">body shape wear</Nav.Link>
                                                </Nav.Item>


                                                <Nav.Item className="product-category-item" id="bottoms-product">
                                                    <Nav.Link eventKey="Bottoms">Bottoms</Nav.Link>
                                                </Nav.Item>


                                                <Nav.Item className="product-category-item" id="Ladies-Tops-product">
                                                    <Nav.Link eventKey="Tops">Ladies-Tops</Nav.Link>
                                                </Nav.Item>


                                                <Nav.Item className="product-category-item" id="underwear-product">
                                                    <Nav.Link eventKey="underwear"> Underwear</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={8}>
                                            <Tab.Content>


                                                <Tab.Pane eventKey="all" className="product-item-content">
                                                    <div className="row">
                                                        {get_all_product_data}
                                                    </div>

                                                </Tab.Pane>


                                                <Tab.Pane eventKey="men" className="product-item-content">
                                                    <div className="row">
                                                        {get_men_product}
                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="women" className="product-item-content">
                                                    <div className="row">
                                                        {get_women_product}
                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="kidswear" className="product-item-content">
                                                    <div className="row">
                                                        {get_kidswear_product}
                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="tShirt" className="product-item-content">
                                                    <div className="row">
                                                        {get_tShirt_product}
                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="polotShirt" className="product-item-content">
                                                    <div className="row">
                                                        {get_polo_t_Shirt_product}
                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="tank" className="product-item-content">
                                                    <div className="row">
                                                        {get_tank_top_product}
                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="jacket" className="product-item-content">
                                                    <div className="row">
                                                        {get_jacket_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="sweatShirt" className="product-item-content">
                                                    <div className="row">
                                                        {get_sweat_shirt_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="sweatPant" className="product-item-content">
                                                    <div className="row">
                                                        {get_sweat_pant_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="Trouser" className="product-item-content">
                                                    <div className="row">
                                                        {get_Trouser_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="Jogging" className="product-item-content">
                                                    <div className="row">
                                                        {get_Jogging_Pant_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="pyjama" className="product-item-content">
                                                    <div className="row">
                                                        {get_pyjama_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="Tunic" className="product-item-content">
                                                    <div className="row">
                                                        {get_Tunic_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="Dress" className="product-item-content">
                                                    <div className="row">
                                                        {get_Dress_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="body_shape_wear" className="product-item-content">
                                                    <div className="row">
                                                        {get_body_shape_wear_product}
                                                    </div>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="Bottoms" className="product-item-content">
                                                    <div className="row">
                                                        {get_bottoms_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="Tops" className="product-item-content">
                                                    <div className="row">
                                                        {get_Ladies_Tops_product}
                                                    </div>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="underwear" className="product-item-content">
                                                    <div className="row">
                                                        {get_underwear_product}
                                                    </div>
                                                </Tab.Pane>




                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fabrication-area section-padding section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 offset-lg-2 offset-md-2">
                                <div className="section-title section-title-padding text-center">
                                    <h2>Types of Fabrication that Bonian Knit Fashions Ltd. works:</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">


                            <div className="col-lg-4 col-md-6">
                                <div className="single-fabrication">
                                    <div className="single-fabrication-img">
                                        <img src={img1} alt="fabrication" />
                                    </div>
                                    <div className="single-fabrication-content">
                                        <span>single jersey</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-fabrication">
                                    <div className="single-fabrication-img">
                                        <img src={img2} alt="fabrication" />
                                    </div>
                                    <div className="single-fabrication-content">
                                        <span>95% Cotton 5% Elastan</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-fabrication">
                                    <div className="single-fabrication-img">
                                        <img src={img3} alt="fabrication" />
                                    </div>
                                    <div className="single-fabrication-content">
                                        <span>Interlock, Drop Needle Interlock</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">
                                <div className="single-fabrication">
                                    <div className="single-fabrication-img">
                                        <img src={img4} alt="fabrication" />
                                    </div>
                                    <div className="single-fabrication-content">
                                        <span>white viscose</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-fabrication">
                                    <div className="single-fabrication-img">
                                        <img src={img1} alt="fabrication" />
                                    </div>
                                    <div className="single-fabrication-content">
                                        <span>single jersey</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-fabrication">
                                    <div className="single-fabrication-img">
                                        <img src={img2} alt="fabrication" />
                                    </div>
                                    <div className="single-fabrication-content">
                                        <span>Single Jersey</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default ProductPage;