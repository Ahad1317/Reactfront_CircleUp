import { Share } from '../share/Share'
import React from 'react'
import "./feed.css"
import Post from '../post/Post'
import { Posts } from '../../userData'

export const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p) => (
          <Post key ={p.id} post = {p}/>
        ))}
      </div>
    </div>
  )
}
