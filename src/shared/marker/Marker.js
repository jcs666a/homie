import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './marker.scss';

export default class Marker extends Component {

    render() {
        const {
            onClickFn
        } = this.props;

        return (
            <div className='marker' onClick={() => {
                onClickFn(this.props.id);
            }}>
                {this.props.price}
            </div>
        );
    }
}

Marker.propTypes = {
    id: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    price: PropTypes.number,
    onClickFn: PropTypes.func
};
