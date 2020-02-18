import React, { Component } from 'react';
// single manufacturing  data
let single_manufacturing_data_one = {
    mp_id: "p-first",
    mp_img: require("../../../assets/images/manufacturing/1_Manufacturing.jpg"),
    mp_img_alt: "manufacturing process image",
    mp_heading: "manufacturing",
    mp_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam veniam odit rerum ipsam facilis?"
}

let single_manufacturing_data_two = {
    mp_id: "p-second",
    mp_img: require("../../../assets/images/manufacturing/6_Design__Development.jpg"),
    mp_img_alt: "manufacturing process image",
    mp_heading: "Design Development",
    mp_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam veniam odit rerum ipsam facilis?"
}
let single_manufacturing_data_three = {
    mp_id: "p-third",
    mp_img: require("../../../assets/images/manufacturing/4_Process__Quality.jpg"),
    mp_img_alt: "manufacturing process image",
    mp_heading: "Process Quality",
    mp_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam veniam odit rerum ipsam facilis?"
}
let single_manufacturing_data_four = {
    mp_id: "p-four",
    mp_img: require("../../../assets/images/manufacturing/5_Product.jpg"),
    mp_img_alt: "manufacturing process image",
    mp_heading: "Products",
    mp_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam veniam odit rerum ipsam facilis?"
}

// get single manufacturing data

class Process extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="col-lg-6 col-md-12">
                    <div className="single-manufacturing-process">
                        <div className="manufacturing-process-img">
                            <img src={single_manufacturing_data_one.mp_img} alt={single_manufacturing_data_one.mp_img_alt} />
                        </div>
                        <div className="manufacturing-process-content" id={single_manufacturing_data_one.mp_id}>
                            <h4>{single_manufacturing_data_one.mp_heading}</h4>
                            <p>{single_manufacturing_data_one.mp_text}</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6 col-md-12">
                    <div className="single-manufacturing-process">
                        <div className="manufacturing-process-img">
                            <img src={single_manufacturing_data_two.mp_img} alt={single_manufacturing_data_two.mp_img_alt} />
                        </div>
                        <div className="manufacturing-process-content" id={single_manufacturing_data_two.mp_id}>
                            <h4>{single_manufacturing_data_two.mp_heading}</h4>
                            <p>{single_manufacturing_data_two.mp_text}</p>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6 col-md-12">
                    <div className="single-manufacturing-process">
                        <div className="manufacturing-process-img">
                            <img src={single_manufacturing_data_three.mp_img} alt={single_manufacturing_data_three.mp_img_alt} />
                        </div>
                        <div className="manufacturing-process-content" id={single_manufacturing_data_three.mp_id}>
                            <h4>{single_manufacturing_data_three.mp_heading}</h4>
                            <p>{single_manufacturing_data_three.mp_text}</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="single-manufacturing-process">
                        <div className="manufacturing-process-img">
                            <img src={single_manufacturing_data_four.mp_img} alt={single_manufacturing_data_four.mp_img_alt} />
                        </div>
                        <div className="manufacturing-process-content" id={single_manufacturing_data_four.mp_id}>
                            <h4>{single_manufacturing_data_four.mp_heading}</h4>
                            <p>{single_manufacturing_data_four.mp_text}</p>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Process;
