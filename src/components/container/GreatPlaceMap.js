import React, {Component } from 'react';

class MyGreatPlace extends Component {

    static defaultProps = {};


    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="myMapdata">
                {this.props.text}
            </div>
        );
    }
}
export default MyGreatPlace;