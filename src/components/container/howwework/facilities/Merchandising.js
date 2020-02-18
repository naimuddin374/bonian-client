import React from 'react';
import Fade from 'react-reveal/Fade';

// Merchandising all data
const merchandising_data = [
    {
        name: "Order package preparation"
    },
    {
        name: "Consumption preparation as per style of order with fabric and accessories"
    },
    {
        name: "Fabric and accessories sourcing from local and foreign suppliers"
    },
    {
        name: "Making samples as per Buyer requirement and samples approval done by Buyer before production"
    },
    {
        name: "LC"
    },
    {
        name: "Export documents"
    },
];

// get Merchandising data
const get_data = merchandising_data.map((single_data, i) => {
    return (
        <li key={i}>{single_data.name}</li>
    )
})

const Merchandising = () => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="merchandising-area mer-quality-area">
                <Fade up>
                    <div className="sub-section-title quality-ins-sub-heading pb-4 merc-quality-icon">
                        <i className="fa fa-bullhorn"></i>
                    </div>
                    <div className="merchandising-list block-heading-content">
                        <h3>Merchandising</h3>
                        <ul>
                            {get_data}
                        </ul>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default Merchandising;