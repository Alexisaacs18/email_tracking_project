import React, { useState, useEffect } from "react";
import EmailCard from './EmailCard'
function SideBar({emails}){
  const[search,setSearch] = useState('')

  const filtered = emails.filter(email => email.name.toUpperCase().includes(search.toUpperCase()))

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
    return(
     <nav id = 'sidebar'>
       <ul>
       <input placeholder='search' id='searchbar' value={search} onChange={updateSearch}></input>
       {filtered && filtered.map((email) => {
         return (
           <EmailCard
             name ={email.name}
             key={email.id}
             email={email}
            />
         );
       })}
       </ul>
     </nav>
   )}
export default SideBar;