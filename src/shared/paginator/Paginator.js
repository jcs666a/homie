import React from 'react';
import PropTypes from 'prop-types';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import './paginator.scss';

export default function Paginator(props) {
    const {
        currentPage,
        totalPages,
        totalHomes,
        itemsPerPage,
        goToPage
    } = props;

    const humanCurrentPage = currentPage + 1;
    const itemsFrom = humanCurrentPage * itemsPerPage - (itemsPerPage - 1);
    const itemsTo = humanCurrentPage === totalPages ? totalHomes : humanCurrentPage * itemsPerPage;

    return (
        <div className="paginator">
            { humanCurrentPage > 1 && <button onClick={() => goToPage(currentPage - 1)}><GoChevronLeft /></button> }
            {itemsFrom} a {itemsTo} { humanCurrentPage < totalPages && `de ${totalHomes}` }
            { humanCurrentPage < totalPages && <button onClick={() => goToPage(currentPage + 1)}><GoChevronRight /></button> }
        </div>
    );
}

Paginator.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    totalHomes: PropTypes.number,
    itemsPerPage: PropTypes.number,
    goToPage: PropTypes.func
};
