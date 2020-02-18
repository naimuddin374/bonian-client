import React, { Component } from 'react';
import CompanyProfileBreadcrumb from "../container/breadcrumb/CompanyProfileBreadcrumb";
import ss from "../../assets/pdf/download.pdf";

class CompanyProfile extends Component {
    render() {
        return (
            <React.Fragment>
                <CompanyProfileBreadcrumb />
                <section className="company-pdf-profile-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 section-title-padding">
                                <h2>Bonian Knit Fashion LTD</h2>
                                <p>Bonian Knit Fashion Limited is one of the leading Export-oriented garments in Bangladesh. We started our journey in January 2007. Bonian Knit Fashion Limited specializes in the manufacturing of premium quality men's and women's T-shirts, Polo shirt, Tank top, PK polo etc.  BKFL has a dedicated and professional corporate management team with over a decade of experience in the field. We encourage our potential buyers to ask us for samples so that they may closely assess our product and its workmanship. The company currently exports its garments to its customers in Canada, Germany, Belgium and Netherlands, Italy.</p>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="company-profile-pdf-show">
                                    <iframe src={ss} frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default CompanyProfile;