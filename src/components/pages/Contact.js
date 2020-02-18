import React, { Component } from 'react';
import ContactusBreadcrumb from "../container/breadcrumb/ContactusBreadcrumb";
import GoogleMap from "../container/GoogleMap";
// import we chat icon
const chaticon = {
    chat_icon: require("../../assets/images/we_chat.png"),
    chat_icon_alt: "chat icon"
}
class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        // contact page heading data
        let contact_page_data = {
            heading: "Contact Us",
            content: "Bonian knit fashion LTD manufactures all kinds of quality products at Latifpur, Gazipur.Our corporate office is based in Uttara."
        }
        // welcome contact page
        let welcome_contact_data = {
            heading: "Get in Touch",
        }
        //  contact grouping information
        let contact_grouping =
        {
            address: "House- 53, Road- 14, Sector- 13 Uttara, Dhaka 1230, Bangladesh",
            phone: "+88 02 7789330, +88 04635496",
            whatsapp: "05356364",
            email: "info@bonianbd.com",
            chatapp: "+88 02 7789330, +88 04635496"
        }

        return (
            <React.Fragment>
                <ContactusBreadcrumb />
                <div className="contact-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12">
                                <div className="section-title section-title-padding text-center">
                                    <h2>{contact_page_data.heading}</h2>
                                    <p>{contact_page_data.content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-page-address-wrapper">
                                    <h3>{welcome_contact_data.heading}</h3>
                                    <div className="contact-page-address-inner pt-4">
                                        <ul>
                                            <li><span><i className="fa fa-map-marker" aria-hidden="true"></i></span>{contact_grouping.address}</li>
                                            <li><span><i className="fa fa-phone" aria-hidden="true"></i></span>{contact_grouping.phone}</li>
                                            <li><span><i className="fa fa-whatsapp" aria-hidden="true"></i></span>{contact_grouping.whatsapp}</li>

                                            <li><span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>{contact_grouping.email}</li>

                                            <li><span className="we_chat"><img src={chaticon.chat_icon} alt={chaticon.chat_icon_alt} /></span>{contact_grouping.chatapp}</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <form action="#" className="contact-page-form">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="single-form-field-area">
                                                <input className="film-single-filed" type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="single-form-field-area">
                                                <input className="film-single-filed" type="email" name="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="single-form-field-area">
                                                <textarea name="message" id="user_message" placeholder="Write your message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="single-form-field-area text-right mt-3">
                                                <input className="theme-btn" type="submit" value="Send Message" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <GoogleMap />
            </React.Fragment>
        )
    }

}
export default Contact;