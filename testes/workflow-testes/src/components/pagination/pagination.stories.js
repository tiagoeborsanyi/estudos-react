'use strict';

import React from 'react';
import { action } from '@storybook/addon-actions';
import Pagination from './index';

export default {
    component: Pagination,
    title: 'Pagination'
}

export const withoutProps = () => <Pagination 
                                        total={10}
                                        activePage={6} />

withoutProps.story = {
    name: 'without props'
}