import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../reducers/_dispatchers';
import { endpoint } from '../../constants/api';
import { FaFilter } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { arrayDivider } from '../../shared/helpers.js';
import HomeFrame from '../../shared/homeFrame/HomeFrame';
import Paginator from '../../shared/paginator/Paginator';
import Gmap from '../../shared/map/Map';

import './homesContainer.scss';

class HomesContainer extends Component {
    constructor(props) {
        super(props);
        const {
            Homes
        } = this.props;

        this.state = {
            isLoading: true,
            homes: Homes,
            currentPage: 0,
            totalPages: 1,
            totalHomes: 0,
            itemsPerPage: 8,
            defaultZoom: 10,
            centerCords: {
                lat: 19.4448952,
                lng: -99.19529169999998
            },
            newCenterCords: null
        }
    }

    componentWillMount() {
        const { setHomesData } = this.props;
        axios({
            method: 'GET',
            url: endpoint.homes
        }).then(response => {
            setHomesData(response.data.homes);
        });
    }

    componentDidUpdate() {
        const { homes, itemsPerPage } = this.state;
        const { Homes } = this.props;
        if(Homes.length > 0 && homes.length === 0) {
            this.setState({
                isLoading: false,
                homes: arrayDivider(Homes, itemsPerPage),
                totalPages: Math.ceil(Homes.length / itemsPerPage),
                totalHomes: Homes.length
            });
        }
    }

    centerMap = cords => {
        this.setState({
            newCenterCords: cords
        });
    }

    goToPage = num => {
        this.setState({
            currentPage: num
        });
    }

    render() {
        const {
            homes,
            currentPage,
            isLoading,
            totalPages,
            totalHomes,
            itemsPerPage,
            defaultZoom,
            centerCords,
            newCenterCords
        } = this.state;

        return (
            <div className="container">
                { isLoading && <AiOutlineLoading3Quarters className="icon-spin loader" /> }
                { !isLoading && (
                    <div className="main-container">
                        <div className="left-column-container">
                            <div className="filters">
                                <div className="city block-shadow">
                                    <span>Ciudad de México</span>
                                    <span>{totalHomes} departamentos</span>
                                </div>
                                <div className="filters-btn block-shadow">
                                    <FaFilter />
                                    Filtros
                                </div>
                            </div>
                            <div className="parent-homes-container">
                                { homes[currentPage].map(home =>
                                    <HomeFrame home={home} centerMap={this.centerMap} key={`home-frame-${home.id}`} />
                                )}
                            </div>
                            <Paginator currentPage={currentPage} totalPages={totalPages} totalHomes={totalHomes} itemsPerPage={itemsPerPage} goToPage={this.goToPage} />
                            <div className="extras-footer">
                                <h4>¿No encuentras depa?</h4>
                                <p>Dinos qué quieres y nosotros te lo buscamos</p>
                                <button className="block-shadow">Encuéntrame un depa</button>
                            </div>
                        </div>
                        <div className="rigth-column-container">
                            <Gmap
                                centerCords={centerCords}
                                newCenterCords={newCenterCords}
                                defaultZoom={defaultZoom}
                                homes={homes}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomesContainer);
