/* global describe, test */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
  });
});
