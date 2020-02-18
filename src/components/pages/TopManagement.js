import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// import md message file
import MdMessage from "../container/MdMessage";
// team section heading data
const team_section_data = {
    subheading: "Our management",
    heading: "Bonian Board of Directors"
}
// team member loop
const bonian_team_member_data = [
    {
        unique: "left",
        member_img: require("../../assets/images/team/Monowara_Begum_Chairperson.jpg"),
        member_alt: "team member image",
        member_name: "Monowara Begum",
        member_designation: "Chairman",
        content: '" We have a strong vision that will allow us to transform the Apparel industry of our country. "',
        team_social: [
            {
                social_link: "www.facebook.com",
                social_icon: "fa fa-facebook"
            },
            {
                social_link: "www.twitter.com",
                social_icon: "fa fa-linkedin"
            },
        ]

    },


    {
        unique: "right",
        member_img: require("../../assets/images/team/Moniruzzaman_Director.png"),
        member_alt: "team member image",
        member_name: "Md. Moniruzzaman Shetu",
        member_designation: "Executive Director",
        content: '" I strongly resonate with the values of our company and believe that there\'s always space for growth. "',
        team_social: [
            {
                social_link: "www.facebook.com",
                social_icon: "fa fa-facebook"
            },
            {
                social_link: "www.twitter.com",
                social_icon: "fa fa-linkedin"
            },
        ]

    },

    {
        unique: "left",
        member_img: require("../../assets/images/team/Goltekin_Nahar_Director.jpg"),
        member_alt: "team member image",
        member_name: "Goltekin Nahar",
        member_designation: "Director",
        content: '" I believe that all growth should be sustainable and that the company has to grow with the customer and the employees "',
        team_social: [
            {
                social_link: "www.facebook.com",
                social_icon: "fa fa-facebook"
            },
            {
                social_link: "www.twitter.com",
                social_icon: "fa fa-linkedin"
            },
        ]
    },

]
// get team member data
const get_member_data = bonian_team_member_data.map((single_member, i) => {
    const get_socal_all_data = single_member.team_social.map((single_socail, i) => {
        return (
            <li key={i}>
                <Link to={single_socail}><i className={single_socail.social_icon}></i></Link>
            </li>
        )
    });

    if (single_member.unique === "left") {
        return (
            <Fade left key={i}>
                <div className="row align-items-center single-team-member">
                    <div className="col-lg-6">
                        <div className="bonian-team-member-img relative">
                            <img src={single_member.member_img} alt={single_member.member_alt} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bonian-team-member-content">
                            <h4 className="team-member-name">{single_member.member_name}</h4>
                            <h5 className="team-member-designation">{single_member.member_designation}</h5>
                            <p>{single_member.content}</p>
                            <div className="bonian-team-member-social-link social-link-group">
                                <ul>
                                    {get_socal_all_data}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
    else {
        return (
            <Fade right key={i}>
                <div className="row align-items-center single-team-member">
                    <div className="col-lg-6">
                        <div className="bonian-team-member-content">
                            <h4 className="team-member-name">{single_member.member_name}</h4>
                            <h5 className="team-member-designation">{single_member.member_designation}</h5>
                            <p>{single_member.content}</p>
                            <div className="bonian-team-member-social-link social-link-group">
                                <ul>
                                    {get_socal_all_data}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bonian-team-member-img relative">
                            <img src={single_member.member_img} alt={single_member.member_alt} />
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
})

class TopManagement extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <MdMessage />
                <section className="team-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="section-title text-center section-title-padding">
                                    <span>{team_section_data.subheading}</span>
                                    <h2>{team_section_data.heading}</h2>
                                </div>
                            </div>
                        </div>
                        {get_member_data}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default TopManagement;



