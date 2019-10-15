import React from 'react';
// import { action } from '@storybook/addon-actions';
import Pagination from './index';

export default {
    component: Pagination,
    title: 'Pagination'
}

export const withoutProps = () => <Pagination />

export const withTotalAnActivePage = () => <Pagination 
                                        total={10}
                                        activePage={5} />

export const withPageLink = () => <Pagination 
                                        total={3}
                                        activePage={1}
                                        pageLink='https://google.com/%page%' />

export const withCallback = () => <Pagination 
                                        total={15}
                                        activePage={7}
                                        pageLink='https://google.com/%page%'
                                        onClick={(page) => {
                                            window.alert(page)
                                        }} />
withoutProps.story = {
    name: 'without props'
}
withTotalAnActivePage.story = {
    name: 'with toal and activePage'
}
withPageLink.story = {
    name: 'with page link'
}
withCallback.story = {
    name: 'with callback'
}