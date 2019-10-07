'use strict';

import React from 'react';
// import { storiesOf } from '@storybook/react';
import Repos from './repos';

export default {
    title: 'Repos'
}

export const toStoryRepos = () => <Repos title="Favoritos" />

toStoryRepos.story = {
    name: 'with title prop'
}

export const withRepos = () => <Repos
                                    title="Favoritos"
                                    repos={[{
                                        link: 'http://github.com/tiagoeborsany/memorandos',
                                        name: 'Memorandos'
                                    }]}
                                />

withRepos.story = {
    name: 'with repos'
}

// storiesOf('Repos', module)
//     .add('with title prop', () => (
//         <Repos title="Favoritos" />
//     ))
//     .add('with repos', () => (
//         <Repos
//             title="Favoritos"
//             repos={[{
//                 link: 'http://github.com/tiagoeborsany/memorandos',
//                 name: 'Memorandos'
//             }]}
//         />
//     ))