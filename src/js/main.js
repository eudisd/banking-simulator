import 'semantic/dist/semantic.css';
import 'semantic/dist/semantic';

import React from 'react';

import { render } from 'react-dom';
import routes from './routes';

import jQuery from 'jquery';

window.jQuery = jQuery;

render(
  routes,
  document.getElementById('root')
);


