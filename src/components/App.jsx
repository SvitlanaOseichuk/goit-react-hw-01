import { useState } from 'react'
import './App.css'
import userData from "./userData.json";
import FriendList from './FriendList';
import Profile from './Profile';
import friends from "./friends.json";
import transactions from "./transactions.json"
import TransactionHistory from './TransactionHistory';



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
