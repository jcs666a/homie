import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FiHeart } from 'react-icons/fi';
import { FaBed, FaBath, FaCar, FaDog } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import { priceFormater } from '../../shared/helpers';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './homeFrame.scss';

export default class HomeFrame extends Component {

    render() {
        const { centerMap } = this.props;
        const {
            id,
            abbr_address,
            bathrooms,
            bedrooms,
            parkings,
            sqare_mts,
            location,
            // name,
            pet_friendly,
            photos,
            price,
            is_homie_exclusive
        } = this.props.home;

        return (
            <div className="frame block-shadow">
                <div className="price">${priceFormater(price)} <FiHeart /></div>
                <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
                    { photos.map((photo, index) => {
                        const divBg = {
                            backgroundImage: 'url(' + photo + ')'
                        };
                        return (
                            <div className="photo-container" key={`foto-${id}-${index}`} style={divBg}></div>
                        );
                    }) }
                </Carousel>
                {is_homie_exclusive && <div className="homie-exclusive">Exclusivo de Homie</div>}
                <div className="address-icons-container" onClick={()=> {
                    centerMap(location);
                }}>
                    <div className="address">{abbr_address}</div>
                    <div className="icons">
                        <span>{bedrooms} <FaBed /></span>
                        <span>{bathrooms} <FaBath /></span>
                        <span>{parkings} <FaCar /></span>
                        <span>{pet_friendly ? 'Si' : 'No'} <FaDog /></span>
                        <span>{sqare_mts}<sup>2</sup></span>
                    </div>
                </div>
            </div>
        )
    }
}

HomeFrame.propTypes = {
    centerMap: PropTypes.func,
    home: PropTypes.object
};
