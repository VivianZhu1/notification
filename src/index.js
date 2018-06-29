import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Container from './js/Container';
// import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router>
    <Container />
    </Router>
, document.getElementById('root'));
// registerServiceWorker();
