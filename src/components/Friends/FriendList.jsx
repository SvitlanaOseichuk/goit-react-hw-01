import React from 'react';
import css from "./Friends.module.css"
import clsx from 'clsx';



function FriendListItem ({avatar, name, isOnline}) {
    return (
        <div >
           <img className="" src={avatar} alt="Avatar" width="54" />
           <p className={css.friendName}>{name}</p>
           <p className={clsx(css.friendStatus, {[css.friendOffline]: isOnline})}>{isOnline ? "online" : "offline"}</p>
       </div>

    )
}


const FriendList = ({friends}) => {
  return (
    <ul className={css.friendsList} >
        {friends.map((friend) => (
          <li className={css.friendItem} key={friend.id}>
            <FriendListItem 
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
          </li>
        ))}      
   </ul>
  )
}

export default FriendList
