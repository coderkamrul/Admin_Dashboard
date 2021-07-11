import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
    return (
        <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin Panel</span>
            </div>
            <div className="topRight">
                <div className="topbariconsContainer">
                < NotificationsNone />
                <span className="topIconBag">2</span>
                </div>
                <div className="topbariconsContainer">
                < Language />
                </div>
                <div className="topbariconsContainer">
                < Settings />
                </div>
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" className="topAvatar" />
            </div>
        </div>
        </div>
    )
}

export default Topbar
