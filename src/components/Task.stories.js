import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object} from '@storybook/addon-knobs/react';

import Task from './Task';

export const task = {
  id:'1',
  title:'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018,0,1,11,0)
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

const longTitle = 'I have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkj';

storiesOf('Task', module)
  .addDecorator(story=><div style={{padding: '3rem'}}>{story()}</div>)
  .addDecorator(withKnobs)
  .add('default', () => <Task task={object('task', {...task})} {...actions} />)
  .add('pinned', () => <Task task={{...task, state: 'TASK_PINNED'}} {...actions} />)
  .add('long title', () => <Task task={{...task, title:longTitle}} {...actions} />)
  .add('archived', () => <Task task={{...task, state: 'TASK_ARCHIVED'}} {...actions} />);