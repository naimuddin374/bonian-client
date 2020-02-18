import React, { Component } from 'react';

class WidgetMenu extends Component {
    render() {
        return (
            <div>
                <div className="widget-wrapper contact-us-widget">
                    <div className="widget-title">
                        <h4>{widget_address_data.widget_title}</h4>
                    </div>
                    <div className="widget-content widget-address-content">

                        <div className="single-address">
                            <div className="address-icon">
                                <i className="fa fa-mobile"></i>
                            </div>
                            <div className="address-content">
                                <p>+88 02 7789330</p>
                            </div>
                        </div>

                        <div className="single-address">
                            <div className="address-icon">
                                <i className="fa fa-envelope-o"></i>
                            </div>
                            <div className="address-content">
                                <p>info@bonianbd.com</p>
                            </div>
                        </div>


                        <div className="single-address">
                            <div className="address-icon">
                                <i className="fa fa-link" aria-hidden="true"></i>
                            </div>
                            <div className="address-content">
                                <p>www.bonianbd.com</p>
                            </div>
                        </div>

                        <div className="single-address">
                            <div className="address-icon">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div className="address-content">
                                <p>Latifpur, Shardagonj, <br /> Kashimpur, Gazipur, Bangladesh</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default WidgetMenu;






// widget address content

const widget_address_data = {
    widget_title: "Contact us",
    widget_address: "6803 Dickens Islands Apt. 567",
    number: "(062) 109-9222",
    gmail: "contact@support.com"
}