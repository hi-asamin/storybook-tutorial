import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '.';

const stories = storiesOf('Button', module);

stories.add('button component', () => (
	  <Button text={text('Label', 'Click Me')} onClick={action('Click!')} />
));
