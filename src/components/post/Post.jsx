import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import "./post.css"
import { Users } from '../../userData'

function Post({post}) {
    const[like,setlike]=useState(post.like)
    const[isliked,setIsliked]=useState(false)
    const likeHandler = () => {
        setlike(isliked?like-1:like+1)
        setIsliked(!isliked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">

            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture}
                    alt="" className='postProfileImg' />
                    <span className="postUserName">
                        {Users.filter((u)=>u.id===post?.userId)[0].username}
                        </span>
                    <span className="dateName">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="post" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" onClick= {likeHandler} alt="" className='likeIcon'/>
                    <img src="/assets/heart.png" onClick= {likeHandler} alt="" className='likeIcon'/>
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post