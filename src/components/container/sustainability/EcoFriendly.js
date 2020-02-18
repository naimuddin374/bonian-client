import React, { Component } from 'react';

const eco_friendly_data ={
    title:"Eco friendly & organic",
    sub_heading:"Go Green with Rayontex Sustainable Manufacturing & Sourcing",
    eco_img: require("../../../assets/images/Sustainability/fashion_fabri.png"),
    eco_img_alt:"eco image",
    eco_features:[
        {
            eco_feature_name: "Organic Sourced Fabrics"
        },
        {
            eco_feature_name: "Cutting Edge Green Manufacturing"
        },
        {
            eco_feature_name: "Global Organic Textile Standard Certification"
        },
        {
            eco_feature_name: "Digital Printing"
        },
        {
            eco_feature_name: "Recycled Materials (REPREVE)"
        },
        {
            eco_feature_name: "AirDye Ecological Dyeing "
        },
        {
            eco_feature_name: "EcoVero Natural Wood Fibers"
        },
        {
            eco_feature_name: "Tencel Recycled Fabric"
        },

    ]
}

class EcoFriendly extends Component {
    render() {
        return (
            <section className="eco-friendly-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <h2>{eco_friendly_data.title}</h2>
                                <h5 className="pt-4 pb-5">{eco_friendly_data.sub_heading}</h5>
                                <div className="feature-item-list">
                                    <ul>
                                    {
                                        eco_friendly_data.eco_features.map( (single_feature,i) =>(
                                            <li key={i}>{single_feature.eco_feature_name}</li>
                                        ))
                                    }

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="eco-feature-img">
                                <img src={eco_friendly_data.eco_img} alt={eco_friendly_data.eco_img_alt}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default EcoFriendly;