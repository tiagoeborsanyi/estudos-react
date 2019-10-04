import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories () {
    const allStories = [];
    req.keys().forEach(fileName => allStories.push(req(fileName)));
    return allStories;
}
configure(loadStories, module);
// configure(require.context('../src/components/actions', true, /\.stories\.js$/), module);
