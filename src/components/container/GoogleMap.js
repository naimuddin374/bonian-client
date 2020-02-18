import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GreatPlaceMap from './GreatPlaceMap';


class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 23.9722777,
            lng: 90.2808461
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '450px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:"AIzaSyAGbZZgmiB1CReNYWObnzNlnVy6iE09na0"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <GreatPlaceMap lat={23.9722777} lng={90.2808461} text={'Bonian Knit Fashion Ltd'}/>
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;