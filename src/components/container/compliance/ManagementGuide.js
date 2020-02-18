import React, { Component } from 'react'

class ManagementGuide extends Component {
    render() {
        // management guide line 
        let working_procedure_management = {
            heading: "Working procedure in management:",
            content: "At first we hand over the order to two of our merchandiser and two QA people. Every morning they discuss the whole status in the daily meeting with our General Manager, Merchandising.One QC concerning that particular order will stay in the factory whole day(production time) until final shipment.We always need a pre- production sample and then make a pre-production meeting before we go into production.Our merchandiser and QA inspector go to the factory at the time of pre - production meeting, check the sample, pattern and final comments on sample from buyer and if they are satisfied, they give instruction to the factory people for a trial production."
        }
        // steps garments inspector
        let step_garments_inspector = {
            heading: "Steps in garments inspection:",
            content: "In garments industry, the desired or expected quality parameters are controlled by inspection. We do this inspection in three steps:     Fabric, sewing threads, buttons, trims, etc. are the raw material in garments industry. The quality of a final garment depends on the quality of a fabric when it is received as a roll. Even the most outstanding manufacturing methods can not compensate for defective materials. So before production of garments quality, we check raw material which is very important task in garment industry."
        }

        return (
            <section className="management-step-area section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="bonian-procedur-management procedur-content">
                                <h3>{working_procedure_management.heading}</h3>
                                <p>{working_procedure_management.content}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="bonian-procedur-management garments-step-content">
                                <h3>{step_garments_inspector.heading}</h3>
                                <p>{step_garments_inspector.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default ManagementGuide