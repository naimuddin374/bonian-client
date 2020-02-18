import React from 'react';
import CompanyDetailsBread from "../container/breadcrumb/CompanyDetailsBread";

class CompanyDetails extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {

        // company details information
        let company_details = {
            heading: "About Bonian Knit Fashion Ltd.",
            content: "Bonian Knit Fashion Limited was established in January 2007 with a vision to build a premium garments industry to rival the finest in South East Asia. The company founders imagined a manufacturing company with the ability' to deliver impeccable quality and punctual shipment in a framework of a professional, reliable and sincere business atmosphere. Since then, Bonian Knit Fashion has strategically taken orders that enhanced and enriched both its employees' technical skills as well as its level of quality. The company is now in a position, in accordance with its founding vision to compete in the arena of high fashion and succeed with immaculate consistency.Bonian Knit Fashion Limited specializes in the manufacture of high quality men's and women's T- shirts, Polo shirt, Tank top, PK polo etc.The company’s brand new machinery include highly: specialized equipment needed in the productive' of high quality shirts. Bonian Knit Fashion Limited also takes orders for padded quilted T-shirts and ladies' pajama.The company currently exports its garments to its customers in Canada, Germany, Belgium and Netherlands, Italy. Bonian Knit Fashion Limited has a dedicated and professional corporate management team with over a decade of experience in the field.Its production staff has been directly recruited from the top garment houses of the country.Bonian Knit Fashion Limited not only wants to excel in its products, but also wants to provide a safe and habitable environment for its employees.To this end, the company has instituted safety, environmental and labor requirements far exceeding the local laws and in accordance with international regulations.Bangladesh is a hot bed of garments manufacturing, now ranking; fourth in the list of garments exporting nations.Unfortunately, the country, as a whole, has been unable to break into the arena of high fashion as most of its exports cater to the lower end of the clothing hierarchy.With this in mind, Bonian Knit Fashion Limited seeks to become a driving force in an initiative by a select few companies to change the foreign image of garments industry in Bangladesh by providing first - class quality with rock - hard commitment.The company wants to present itself as a Different Kind of Company in a Different Kind of Bangladesh.Bonian Knit Fashion Limited is one of the leading export oriented garments.Started business with basic T - shirt now it exports different items of knitwear for all groups and ages.It is a 100 % export -oriented readymade knitwear garments.With a team of competent and professionals Bonian Knit Fashion Limited is using state - of - the art manufacturing facilities, specializing in making knitwear's. Bonian Knit Fashion Limited has adequate varieties of fabric samples. We encourage our potential buyers to ask us for samples so that they can have an idea of the product and its workmanship. Bonian Knit Fashion Limited is to provide superior customer services to its valued clients in order to satisfy their needs a step further than the market."
        }

        return (
            <React.Fragment>
                <CompanyDetailsBread />
                <section className="company-details section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="company-details-content">
                                    <h2 className="pb-3">{company_details.heading}</h2>
                                    <p>{company_details.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}
export default CompanyDetails
