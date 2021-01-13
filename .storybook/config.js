import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

addDecorator(withKnobs);
addDecorator(withInfo);

const req = require.context('../src/components/', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
