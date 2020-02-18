import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

// set apart data
const set_apart_data = [
    {
        picture: require("../../../../assets/images/apart/1.png"),
        picture_alt: "set apart image",
        title: "Competitive Price ",
        description: "We offer competitive prices for our products based on the local RMG market."
    },
    {
        picture: require("../../../../assets/images/apart/2.png"),
        picture_alt: "set apart image",
        title: "Innovation",
        description: "Our dedicated Design and Development team will help you in designing innovative products."
    },
    {
        picture: require("../../../../assets/images/apart/3.png"),
        picture_alt: "set apart image",
        title: "Efficiency",
        description: "We are able to deliver orders of all ranges, be it small or big."
    },
    {
        picture: require("../../../../assets/images/apart/4.png"),
        picture_alt: "set apart image",
        title: "Quality",
        description: "We ensure quality across each step of production and maintain AQL 2.5 on all operations."
    },
    {
        picture: require("../../../../assets/images/apart/5.png"),
        picture_alt: "set apart image",
        title: "Support",
        description: "We provide GSP certificate along with all other export/import documents needed by the client."
    },
    {
        picture: require("../../../../assets/images/apart/6.png"),
        picture_alt: "set apart image",
        title: "Eco friendly",
        description: "We also produce completely organic products as certified by GOTS by customers who require them."
    },
]

class SetApartFeature extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    set_apart_data.map((single_apart, i) => (
                        <div className="col-lg-6 col-md-6" key={i}>

                            <Fade up>
                                <div className="single-apart-feature">
                                    <div className="apart-img">
                                        <img src={single_apart.picture} alt={single_apart.picture_alt} />
                                    </div>
                                    <div className="apart-description-content">
                                        <h3>{single_apart.title}</h3>
                                        <p>{single_apart.description}</p>
                                    </div>
                                </div>
                            </Fade>

                        </div>
                    ))
                }
            </React.Fragment>

        )
    }
}
export default SetApartFeature
