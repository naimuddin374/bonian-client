import React, { Component } from 'react';

// sustainability ambition
const sus_ambition_data = [
    {
        sus_ambition_img: require("../../../assets/images/sus_ambition/sus_1.jpg"),
        sus_ambition_img_alt: "sustainability ambition image",
        title: "ambition 2025 : Number One garment's Company In Bangladesh",
        short_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam rerum voluptate illo in enim omnis cupiditate, voluptatibus hic adipisci obcaecati vel a assumenda repudiandae est porro, animi numquam voluptatem! Veritatis eveniet amet quaerat blanditiis incidunt, quo id sit perferendis officiis?"
    },
    {
        sus_ambition_img: require("../../../assets/images/sus_ambition/sus_2.JPG"),
        sus_ambition_img_alt: "sustainability ambition image",
        title: "ambition 2025 : Top 10 Branding Company In The World",
        short_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam rerum voluptate illo in enim omnis cupiditate, voluptatibus hic adipisci obcaecati vel a assumenda repudiandae est porro, animi numquam voluptatem! Veritatis eveniet amet quaerat blanditiis incidunt, quo id sit perferendis officiis?"
    },
    {
        sus_ambition_img: require("../../../assets/images/sus_ambition/sus8.JPG"),
        sus_ambition_img_alt: "sustainability ambition image",
        title: "ambition 2025 : 100% Economic System Developed",
        short_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam rerum voluptate illo in enim omnis cupiditate, voluptatibus hic adipisci obcaecati vel a assumenda repudiandae est porro, animi numquam voluptatem! Veritatis eveniet amet quaerat blanditiis incidunt, quo id sit perferendis officiis?"
    },
    {
        sus_ambition_img: require("../../../assets/images/sus_ambition/sus_4.jpg"),
        sus_ambition_img_alt: "sustainability ambition image",
        title: "ambition 2025 :Will Provide Our Product all of our country",
        short_description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam rerum voluptate illo in enim omnis cupiditate, voluptatibus hic adipisci obcaecati vel a assumenda repudiandae est porro, animi numquam voluptatem! Veritatis eveniet amet quaerat blanditiis incidunt, quo id sit perferendis officiis?"
    }
]


class SustainabilityAmbition extends Component {
    render() {
        return (
            <section className="sustainability-ambition-area">
                <div className="container">

                    {
                        sus_ambition_data.map((single_ambition, i) => (
                            <div className="row" key={i}>
                                <div className="col-lg-6 col-md-6">
                                    <div className="sustainability-ambition-content">
                                        <h3 className="sus-ambition-heading">{single_ambition.title}</h3>
                                        <p>{single_ambition.short_description}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="sustainability-ambition-pic">
                                        <img src={single_ambition.sus_ambition_img} alt={single_ambition.sus_ambition_img_alt} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        )
    }
}
export default SustainabilityAmbition