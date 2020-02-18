import React, { Component } from 'react';
import Process from "./Process";
import Fade from 'react-reveal/Fade';

// manufacturing heading data
const manufacturing_heading_data = {
    heading: "Manufacturing Procedure"
}

class ManufacturingProcess extends Component {
    render() {
        return (
            <section className="manufacturing-process-area section-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center">
                                <Fade up>
                                    <h2>{manufacturing_heading_data.heading}</h2>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Process />
                    </div>
                </div>
            </section>
        )
    }
}
export default ManufacturingProcess;
