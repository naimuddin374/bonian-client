import React, { Component } from 'react'

// what client says data
const client_data = [
    {
        client_img: require("../../../assets/images/team/Factory_Manager_Anwar_Hossain_.JPG"),
        client_img_alt: "our people",
        client_name: "Anwar Hossain",
        client_designation: "Factory Manager",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../../assets/images/team/Finishing_Incharge_Alim.JPG"),
        client_img_alt: "client image",
        client_name: "Alim",
        client_designation: "Finishing Incharge",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../../assets/images/team/Motiur_Rahman_Merchandising_Mana.png"),
        client_img_alt: "our people",
        client_name: "Motiur Rahman",
        client_designation: "Merchandising Mana",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../../assets/images/team/Nurun_Nabi_Quality_In_charge.JPG"),
        client_img_alt: "our people",
        client_name: "Nurun Nabi",
        client_designation: "Quality In charge",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../../assets/images/team/Production_Manager_Rashed.JPG"),
        client_img_alt: "our people",
        client_name: "Rashed",
        client_designation: "Production Manager",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../../assets/images/team/Quality_Manager_Akib.JPG"),
        client_img_alt: "our people",
        client_name: "Akib",
        client_designation: "Quality Manager",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
    {
        client_img: require("../../../assets/images/team/Uzzal_Kumar_Merchandier.JPG"),
        client_img_alt: "our people",
        client_name: "Uzzal Kumar",
        client_designation: "Merchandier",
        client_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat et, earum neque labore sit?"
    },
]

class WhatClientSayAll extends Component {
    render() {
        return (
            <section className="what-client-says-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center">
                                <h2>Our Peoples</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            client_data.map((single_client_says, i) => (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="single-client-says text-center">
                                        <div className="client-img">
                                            <img src={single_client_says.client_img} alt={single_client_says.client_img_alt} />
                                        </div>
                                        <div className="client-short-description">
                                            <h4>{single_client_says.client_name}</h4>
                                            <h5>{single_client_says.client_designation}</h5>
                                            <p>{single_client_says.client_description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        )
    }
}
export default WhatClientSayAll