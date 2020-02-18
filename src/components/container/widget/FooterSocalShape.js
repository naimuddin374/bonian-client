import React from 'react';
import {Link} from "react-router-dom";


const social_link = [
    {
        social_icon:"fa fa-facebook",
        social_link:"www.facebook.com"
    },
    {
        social_icon: "fa fa-twitter",
        social_link: "www.twitter.com"
    },
    {
        social_icon: "fa fa-youtube-play",
        social_link: "www.youtube.com"
    },
]


const  FooterSocalShape = ()  =>{
    return (
        <div className="footer-socail-shape">
            <ul>
                <li><Link><i className="fa fa-facebook"></i></Link></li>
            </ul>
        </div>
    )
}
export default FooterSocalShape;