import React from 'react'
import "./closeFriend.css"
export const CloseFriend = ({user}) => {
  return (
    <li className='leftbarFriend'>
        <img src={user.profilePicture} alt="" className="leftbarFriendImg" />
        <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}
