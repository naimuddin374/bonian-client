import React, { Component } from 'react';
import SetApartFeature from "../setapart/SetApartFeature";

class SetUsApart extends Component {
    render() {
        return (
            <section className="set-apart-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center">
                                <h2 className="text-white">WHAT SETS US APART</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <SetApartFeature/>
                    </div>
                </div>
            </section>
        )
    }
}
export default SetUsApart