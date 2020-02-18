import React from 'react';
import Fade from 'react-reveal/Fade';
import MdVideo from "../container/MdVideo";

// md message data
const md_message =
{
    md_name: "Mr. Abdul Gani Miah",
    designation: "Managing Director",
    designation_second: "Bonian Knit Fashion Ltd",
    md_img: require("../../assets/images/md_sir.png"),
    md_img_alt: "our md image",
    md_message: "I have established Bonian Knit Fashion Ltd with a vision to deliver quality products across borders and reach at the pinnacle of the industry."
}
const MdMessage = () => {
    return (
        <section className="md-message-area section-padding-top">
            <div className="container">
                <div className="row md-row-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="md-message-content">
                            <Fade up>
                                <h3>{md_message.md_name}</h3>
                                <h5>{md_message.designation} <br />{md_message.designation_second}</h5>
                                <div className="md-video">
                                    <MdVideo />
                                </div>
                                <p>{md_message.md_message}</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Fade left>
                            <div className="md-img">
                                <img src={md_message.md_img} alt={md_message.md_img_alt} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MdMessage;