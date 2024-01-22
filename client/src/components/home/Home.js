import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import EmailBody from './EmailBody'
function MainPage(){
    return(
        <div>
        <div><NavBar/></div>
        <div><SideBar emails={filtered} search={search} updateSearch={updateSearch}/></div>
        <div><EmailBody/></div>
        </div>
    )
}
export default MainPage;