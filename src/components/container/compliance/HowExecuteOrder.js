import React, { Component } from 'react'

class HowExecuteOrder extends Component {
    render() {
        // how we execute data
        let execute_data = [
            {
                execute_content: "We do consumption and costing for any specific style for customer and then we confirm the price to our buyer as quickly as possible."
            },
            {
                execute_content: "We do consumption and costing for any specific style for customer and then we confirm the price to our buyer as quickly as possible."
            },
            {
                execute_content: "After receiving and reviewing the order sheet, we request buyer to open the master LC or send advance TT"
            },

            {
                execute_content: "We do consumption and costing for any specific style for customer and then we confirm the price to our buyer as quickly as possible."
            },
            {
                execute_content: "We do consumption and costing for any specific style for customer and then we confirm the price to our buyer as quickly as possible."
            },

        ]
        return (
            <section className="how-execute-order-area section-padding">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title section-title-padding text-center">
                                <h2>How Execute Our Order</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 col-md-12 offset-lg-1">
                            <div className="execute-order-content">
                                <ul>
                                    {
                                        execute_data.map((single_execute, i) => (
                                            <li key={i}>{single_execute.execute_content}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default HowExecuteOrder