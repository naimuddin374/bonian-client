import React, { Component } from 'react';
import MachineriesList from "../facilities/MachineriesList";
import BonianGlance from "../facilities/BonianGlance";


class FactoriesFacilities extends Component {
    render() {
        return (
            <React.Fragment>
                <BonianGlance/>
                <MachineriesList />
            </React.Fragment>   
        )
    }

}
export default FactoriesFacilities;