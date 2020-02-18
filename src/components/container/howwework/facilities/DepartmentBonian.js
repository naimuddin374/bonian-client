import React from 'react';

// bonian department data
const bonian_data = {
    section_title: "Departments of Bonian Knit Fashions Ltd.",
    section_img: require("../../../../assets/images/department.JPG"),
    section_img_alt: "department image",
    bonian_depart_group: [
        { department_Feature: "Store Department" },
        { department_Feature: "Raw Materials Procurement Department" },
        { department_Feature: " Knitting and Dyeing Department" },
        { department_Feature: "Product Design and Development Department" },
        { department_Feature: "Merchandising Department" },
        { department_Feature: "Quality Control Department" },
        { department_Feature: "Production Department (Cutting, Sewing, Finishing, Packaging)" },
        { department_Feature: "Admin and Accounts Department" },
        { department_Feature: "HR and Compliance Department" },
        { department_Feature: "Quality Control Department (Production QC, Knitting, Dyeing, Printing, Embroidery, Finishing QC)" },
    ]
}

const DepartmentBonian = () => {
    return (
        <section className="department-bonian-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title section-title-padding text-center">
                            <h2>{bonian_data.section_title}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="bonian-inner-departments-area">
                            <ul>
                                {
                                    bonian_data.bonian_depart_group.map((single_feature, i) => (
                                        <li key={i}>{single_feature.department_Feature}</li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="dept-feature-img" src={bonian_data.section_img} alt={bonian_data.section_img_alt} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DepartmentBonian