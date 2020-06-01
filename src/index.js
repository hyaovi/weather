import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}
registerServiceWorker();
