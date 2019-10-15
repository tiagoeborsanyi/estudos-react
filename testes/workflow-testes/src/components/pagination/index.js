import React from 'react';
// import PropTypes from 'prop-types';
import pagination from '../../utils/pagination/index';
import Page from './page';
import style from './pagination.css';

const Pagination = ({ total, activePage, pageLink, onClick }) => (
    <div>
        <ul className={style.container}>
            {pagination({total, activePage}).map((page, index) => (
                <li key={index} className={[`${style.item} +', '+ ${activePage === page ? style.active : ''}`].join(' ')}>
                    <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
                </li>
            ))}
        </ul>
    </div>
);

Pagination.defaultProps = {
    pageLink: '',
    activePage: 1
}

// Pagination.PropTypes = {
//     total: PropTypes.number,
//     activePage: PropTypes.number,
//     pageLink: PropTypes.string,
//     onClick: PropTypes.func
// }

export default Pagination;