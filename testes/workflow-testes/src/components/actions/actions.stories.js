import React from 'react';
import { action } from '@storybook/addon-actions';
import Actions from './actions';

export default {
  component: Actions,
  title: 'Actions',
};

export const toStorybook = () => <Actions
                                    getRepos={action('Get Repos')}
                                    getStarred={action('Get Starred')} />;

export const secondStorybook = () => <p>SEGUNDA HISTORIA</p>;

toStorybook.story = {
  name: 'first history',
};

secondStorybook.story = {
  name: 'second story'
}