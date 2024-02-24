import { useState } from 'react'
import './App.css'
import userData from "./userData.json";
import FriendList from './Friends/FriendList';
import Profile from './Profile/Profile';
import friends from "./Friends/Friends.json";
import transactions from "./Transaction/Transactions.json"
import TransactionHistory from './Transaction/TransactionHistory';



const App = () => {
 return (
  <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
      
  </>
 );
};

export default App
