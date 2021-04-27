import React from 'react'
import Statistics from '../statistics/Statistics'
import statistics from '../data/statistical-data.json'
import User from './users/User'


const App = ({user}) => {
    return (
        <div>

       <User user={user}/>
      
      
       </div>
    );
}

export default App;