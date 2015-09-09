import React from 'react';
import { Alert } from '../components';

import '../styles/index.less';


let content = (
  <div>
    <Alert text="Hello" closable />
    <Alert text="Hello" type="success" />
    <Alert text="Hello" type="warning" />
    <Alert text="Hello" type="danger" />
    <Alert text="Hello" type="secondary" />
  </div>
);

React.render(
  content,
  document.getElementById('app')
);
