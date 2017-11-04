import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrainlineApp from './Components/TrainlineApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TrainlineApp />, document.getElementById('root'));
registerServiceWorker();
