import React from 'react'
import data from '../data/index.js';
import FriendList from './friendList/FriendList.js';
import Profile from './profile/Profile'
import Statistics from './statistics/Statistics.js';
import TransactionHistory from './transaction/TransactionHistory.js';





const App = () => {
    return (
        <div>

      <Profile user={data.user}/>
      
      <Statistics title="Upload stats" stats={data.statistic} />
            <FriendList friends={data.friends} />
            <TransactionHistory items={data.transaction}/>

      
       </div>
    );
}

export default App;