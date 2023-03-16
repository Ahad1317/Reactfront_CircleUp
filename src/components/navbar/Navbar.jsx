import React from 'react'
import "./navbar.css"
import { Chat, Notifications, Person, Search } from "@mui/icons-material"

export const Navbar = () => {
  return (
    <div className = "navbarContainer">
        <div className="navbarLeft">
            <span className = "logo">CircleUp</span>
        </div>
        <div className="navbarCenter">
            <div className="searchBar">
                < Search className = "searchIcon"/>
                <input placeholder= "Search for friends,post or videos" className= "searchInput"/>
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLinks">
                <span className="navbarLink">HomePage</span>
                <span className="navbarLink">Timeline</span>
            </div>
            <div className="navbarIcons">
              <div className="navbarIconItems">
                <Person/>
                <span className="navbarIconBadge">1</span>
              </div>
            <div className="navbarIconItems">
                <Chat/>
                <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconItems">
                <Notifications/>
                <span className="navbarIconBadge">1</span>
            </div>
         </div>
        <img src = "/assets/person/1.jpeg" alt ="" className = "navbarImg"/>
        </div>   
    </div>

  )
}
