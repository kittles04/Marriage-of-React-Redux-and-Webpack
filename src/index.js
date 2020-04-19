import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = "React is cool. I'm using it on top of Webpack and Babel.";

ReactDOM.render(<App title={title} />, document.getElementById('app'));

module.hot.accept();
