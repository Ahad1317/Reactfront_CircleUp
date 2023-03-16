import React from 'react'
import "./rightbar.css"
import { Users } from '../../userData'
import { Online } from '../online/Online'

export const Rightbar = ({profile}) => {
  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Disha</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd"/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    ) 
    } 
      const ProfileRightbar = () =>{
        return (
          <>
          <div className="rightbarTitle">User Information</div>
          <div className="rigthbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City</span>
                <span className="rightbarInfoValue">Lucknow</span>
            </div>
          <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From</span>
              <span className="rightbarInfoValue">Varanasi</span>
          </div>
          <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship</span>
              <span className="rightbarInfoValue">Complex</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>

          <div className="rightbarFollowing">
            <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Disha</span>
          </div>

        </div>
        </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {<ProfileRightbar />}
      </div>
    </div>
  )
}
