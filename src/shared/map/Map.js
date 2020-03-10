import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../../shared/marker/Marker';

class Gmap extends Component {

    constructor() {
        super();
        this.state = {
            map: null,
            maps: null
        };
    }

    componentDidUpdate(prevProps) {
        const {
            currentPage,
            centerCords,
            newCenterCords,
            defaultZoom
        } = this.props;

        if (prevProps.newCenterCords !== newCenterCords) {
            const newLocation = new window.google.maps.LatLng(newCenterCords.lat, newCenterCords.lng);
            this.state.map.setCenter(newLocation);
            this.state.map.setZoom(15);
        } else if(prevProps.currentPage !== currentPage) {
            const newLocation = new window.google.maps.LatLng(centerCords.lat, centerCords.lng);
            this.state.map.setCenter(newLocation);
            this.state.map.setZoom(defaultZoom);
        }
    }

    apiIsLoaded = (map, maps) => {
        this.setState({
            map,
            maps
        });
    }

    onClick = (id) => {
        const ref = document.getElementById('apartment-id-' + id);
        window.scrollTo(0, ref.offsetTop - 55);
    }

    render() {
        const {
            homes,
            currentPage,
            defaultZoom,
            centerCords
        } = this.props;

        return (
            <GoogleMapReact
                className="google-map"
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={centerCords}
                defaultZoom={defaultZoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}
                >
                { homes[currentPage].map(home =>
                    <Marker
                        key={`home-marker-${home.id}`}
                        id={home.id}
                        lat={home.location.lat}
                        lng={home.location.lng}
                        price={home.price}
                        onClickFn={this.onClick}
                    />
                )}
            </GoogleMapReact>
        );
    }
}

export default Gmap;
