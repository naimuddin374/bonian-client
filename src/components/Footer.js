import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import single widget
import Logo from "../components/container/widget/Logo";
import WidgetMenu from "../components/container/widget/WidgetMenu";
import Address from "../components/container/widget/Address";
import FooterBottom from "../components/container/widget/FooterBottom";



const social_link = [
    {
        social_icon: "fa fa-facebook",
        social_link: "www.facebook.com"
    },
    {
        social_icon: "fa fa-youtube-play",
        social_link: "www.youtube.com"
    },
]


const get_social_data = social_link.map((single_social, i) => {
    return (
        <li key={i}><Link to={single_social.social_link}><i className={single_social.social_icon}></i></Link></li>
    )
})

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-area section-padding">
                    <div className="container">
                        <div className="footer-shape-social">
                            <ul>
                                {get_social_data}
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <Logo />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <Address />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <WidgetMenu />

                            </div>
                        </div>
                    </div>
                </div>
                <FooterBottom />
            </React.Fragment>
        )
    }
}
export default Footer;
