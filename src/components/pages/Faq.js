import React, { Component } from 'react';
import FaqBreadcrumb from "../container/breadcrumb/FaqBreadcrumb";
import FaqContent from "../container/faq/FaqContent";
class Faq extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <FaqBreadcrumb />
                <FaqContent />
            </React.Fragment>
        )
    }
}
export default Faq;
