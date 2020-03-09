import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './marker.scss';

export default class Marker extends Component {

    render() {
        return (
            <div className='marker'>
                {this.props.price}
            </div>
        );
    }
}

Marker.propTypes = {
    price: PropTypes.number
};
