import React, { Component } from 'react';
// eco manufacturing data
const eco_manufacturing_data = {
    title: "our ECO friendly manufacturing cycle",
    cycle_features: [
        {
            icon: "fa fa-soundcloud",
            title: "Fiber Sourcing",
            "description": "We help clients source organic materials and completely recycled fibers and fabric such as Repreve from PET bottles."
        },
        {
            icon: "fa fa-diamond",
            title: "Dyeing",
            "description": "With the latest in Ecologically friendly tech such as Air-Dye we reduce water usage by 95% and energy by 86%. "
        },
        {
            icon: "fa fa-handshake-o",
            title: "Manufacturing",
            "description": "Our portfolio of Green apparel factories are certified by many international environmental organizations."
        },
    ]
}

class EcoManufacturingCycle extends Component {
    render() {
        return (
            <section className="eco-manufacturing-cycle section-padding section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="eco-manufacturing-inner-content section-title text-center bonian-welcome-text">
                                <h2>{eco_manufacturing_data.title}</h2>
                                <div className="row pb-5">

                                    {
                                        eco_manufacturing_data.cycle_features.map((single_manu_cycle, i) => (

                                            <div className="col-lg-4 col-md-6" key={i}>
                                                <div className="single-manufacturing-content">
                                                    <i className={single_manu_cycle.icon}></i>
                                                    <h3 className="pb-3">{single_manu_cycle.title}</h3>
                                                    <p>{single_manu_cycle.description}</p>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default EcoManufacturingCycle;