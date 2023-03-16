import React from 'react'
import "./profile.css"
import { Leftbar } from '../../components/leftbar/Leftbar'
import { Feed } from '../../components/feed/Feed'
import { Navbar } from '../../components/navbar/Navbar'
import { Rightbar } from '../../components/rightbar/Rightbar'

export const Profile = () => {
  return (
    <>
        <Navbar/>
          <div className="profile">
            <Leftbar/>
              <div className="profileRight">
                <div className="profileRightTop">
                <div className="profileCover">
                <img src="/assets/post/1.jpeg" alt="" className="profileCoverImg" />
              <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />            
              </div>
              <div className="profileInfo">
              <h4 className="profileInfoName">Abdul Ahad</h4>
              <span className="profileDesc">Hello everyone</span>
               </div>
               </div>
                    <div className="profileRightBottom">
            <Feed/>
            <Rightbar Profile/>
                    </div>
               </div>
          </div>
    </>
  )
}
