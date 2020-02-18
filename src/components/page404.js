import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="error-page-content section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="error-wrapper text-center">
                                <h1>404 Page Not Found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default NotFound;