import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js'
import user from './data/user.json'
import statisticalData from './data/statistical-data.json';
import Statistics from './statistics/Statistics.js';


console.log(statisticalData);


ReactDOM.render(
  <div>
    <App user={user}/>

    <Statistics />
    </div>
 ,
  document.getElementById('root')
);

