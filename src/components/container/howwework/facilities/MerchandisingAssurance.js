import React, { Component } from 'react';
import QualityIns from "../facilities/QualityIns";
import Merchandising from "../facilities/Merchandising";

class MerchandisingAssurance extends Component {
    render() {
        return (
            <section className="rated-quality-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center">
                                <h2>Quality Management System</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <QualityIns />
                        <Merchandising />
                    </div>
                </div>
            </section>
        )
    }
}
export default MerchandisingAssurance