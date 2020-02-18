
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
// import animation file
import '../../../assets/css/animate.min.css';


// bonian team member data
const team_member_data = [
    {
        advisor_img: require('../../../assets/images/team_slider/slider_1.JPG'),
        advisor_img_alt: "Bonian teams",
        advisor_designation: "Online Managements Team",
        advisor_description: "Lorem ipsum Cum, veritatis? s an overt over Billion dollars Industries demand. On resounding involvement in Export Business and successful piloting of the Export Oriented Garments accessories, Montrims Ltd, started their commercial operation since 2003. From the beginning, we are providing nonstop services of supplying garments accessories in the back"
    },
    {
        advisor_img: require('../../../assets/images/team_slider/slider_2.JPG'),
        advisor_img_alt: "Bonian teams",
        advisor_designation: "Marketing Managements Team",
        advisor_description: "Lorem ectetur adipisicing elit. Cum, veritatis? s an overt over Billion dollars Industries demand. On resounding involvement in Export Business and successful piloting of the Export Oriented Garments accessories, Montrims Ltd, started their commercial operation since 2003. From the beginning, we are providing nonstop services of supplying garments accessories in the back"
    },
    {
        advisor_img: require('../../../assets/images/team_slider/slider_3.JPG'),
        advisor_img_alt: "Bonian teams",
        advisor_designation: "Head of IT Team",
        advisor_description: "Lorem ipsumr adipisicing elit. Cum, veritatis? s an overt over Billion dollars Industries demand. On resounding involvement in Export Business and successful piloting of the Export Oriented Garments accessories, Montrims Ltd, started their commercial operation since 2003. From the beginning, we are providing nonstop services of supplying garments accessories in the back"
    },
]

const options = {
    loop: true,
    autoplay: true,
    nav: true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
}

const get_member = team_member_data.map((single_member, i) => {
    return (
        <div className="single-slider-advisor" key={i} style={{ backgroundImage: `url(${single_member.advisor_img})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="advisor-team-member-content">
                            <h2>{single_member.advisor_designation}</h2>
                            <p>{single_member.advisor_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

class TeamSlider extends Component {
    render() {
        return (
            <section className="advisor-team-member-area">
                <OwlCarousel
                    className="advisor-slider owl-carousel owl-theme"
                    {...options}
                >
                    {get_member}
                </OwlCarousel>
            </section>
        )
    }
}
export default TeamSlider;

