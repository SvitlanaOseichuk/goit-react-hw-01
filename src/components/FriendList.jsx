import React from 'react'



function FriendListItem ({avatar, name, isOnline}) {
    return (
        <div>
           <img src={avatar} alt="Avatar" width="48" />
           <p>{name}</p>
           <p>{isOnline}</p>
           {/* <p>{isOnline ? "Онлайн" : "Офлайн"}</p> */}
       </div>

    )
}


const FriendList = ({friends}) => {
  return (
    <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
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
