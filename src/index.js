import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap 4 was loaded from maxcdn in 2019, alongside six other CDN scripts that between
// them did nothing. It is a dependency now, so the app makes no third-party requests.
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
