import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../reducers/_dispatchers';
import { endpoint } from '../../constants/api';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { arrayDivider } from '../../shared/helpers.js';
import HomeFrame from '../../shared/homeFrame/HomeFrame';
import Paginator from '../../shared/paginator/Paginator';

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
            itemsPerPage: 8
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

    goToPage = (num) => {
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
            itemsPerPage
        } = this.state;
        // console.log(this.state);

        return (
            <div>
                { isLoading && <AiOutlineLoading3Quarters className="icon-spin loader" /> }
                { !isLoading && (
                    <div className="main-container">
                        <div className="left-column-container">

                            <div className="parent-homes-container">
                                { homes[currentPage].map((home, index) => <HomeFrame home={home} key={`home-frame-${index}`} />) }
                            </div>
                        </div>
                        <div className="rigth-column-container">

                        </div>
                        <Paginator currentPage={currentPage} totalPages={totalPages} totalHomes={totalHomes} itemsPerPage={itemsPerPage} goToPage={this.goToPage} />
                    </div>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomesContainer);
