'use strict';

const centerRule = ({total, activePage}) => {
    if (activePage -1 <= 0) {
        return 1
    }
    return activePage - 1;
}

const pagination = ({total, activePage}) => {
    if (total <= 5) {
    // return Array.apply(null, {length: total}).map((_, i) => i + 1);
    return Array.from({ length: total }, (_, i) => i+1);
    }
    const visiblePages = 3;
    let pages = [
        1,
        ...Array.from({length: visiblePages}, (_, i) => i+(centerRule({total, activePage}))),
        total
    ]

    pages = pages.filter((page, index, array) => array.indexOf(page) === index);

    let firstPage = pages[0];
    let secondPage = pages[1];
    console.log(secondPage)
    if (secondPage === (firstPage+2)) {
        pages = [
            firstPage,
            firstPage+1,
            ...pages.slice(1)
        ]
    }

    // if ((firstPage+1) !== secondPage) {
    //     pages = [
    //         firstPage,
    //         "...",
    //         ...pages.slice(2)
    //     ]
    // }

    let penultimatePage = pages[pages.length - 2];
    let lastPage = pages[pages.length - 1];
    if (penultimatePage === (lastPage - 2)) {
        pages = [
            ...pages.slice(0, -1),
            lastPage - 1,
            lastPage
        ]
    }

    penultimatePage = pages[pages.length - 2];
    lastPage = pages[pages.length - 1];
    if (penultimatePage <= (lastPage -2)) {
        pages = [
            ...pages.slice(0, -1),
            '...',
            lastPage
        ];
    }

    return pages;
}

export default pagination;