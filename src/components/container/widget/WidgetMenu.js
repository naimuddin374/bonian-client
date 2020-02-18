import React, { Component } from 'react';
import { Link } from "react-router-dom";

class WidgetMenu extends Component {
    render() {
        return (
            <div>
                <div className="widget-wrapper useful-link">
                    <div className="widget-title">
                        <h4>Useful Links</h4>
                    </div>
                    <div className="widget-content widget-menu-content usefullLink">
                        <ul>
                            <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                <Link to={`${process.env.PUBLIC_URL}/mission-vision`}>About Us</Link>
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/faq`}>FAQ</Link>
                                <Link className="link-item" to={`${process.env.PUBLIC_URL}/compliance`}>Compliance</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default WidgetMenu;