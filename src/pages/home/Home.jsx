import React from 'react'
import { Leftbar } from '../../components/leftbar/Leftbar'
import { Feed } from '../../components/feed/Feed'
import { Navbar } from '../../components/navbar/Navbar'
import { Rightbar } from '../../components/rightbar/Rightbar'
import "./home.css"

export const Home = () => {
  return (
    <>
        <Navbar/>
        <div className="homeContainer">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
        </div>
        </>
  )
}
