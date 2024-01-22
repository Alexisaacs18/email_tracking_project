import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import EmailBody from './EmailBody'
function MainPage({emails}){
    return(
        <div>
        <div><NavBar/></div>
        <div><SideBar emails={emails} /></div>
        <div><EmailBody/></div>
        </div>
    )
}
export default MainPage;