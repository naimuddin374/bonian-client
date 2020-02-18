import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <div className="widget-wrapper">
                <div className="widget-title widget-logo">
                    <img src={widget_logo.widget_logo} alt={widget_logo.widget_logo_img_alt} />
                </div>
            </div>
        )
    }
}
export default Logo;



// widget logo content
const widget_logo = {
    widget_logo: require("../../../assets/images/BONIAN.png"),
    widget_logo_img_alt: "widget logo"
}