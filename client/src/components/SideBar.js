import React from 'react'

function SideBar({emails,search,updateSearch}){
    return(
     <nav id = 'sidebar'>
       <ul>
       <input placeholder='search' id='searchbar' value={search} onChange={updateSearch}></input>
       {emails && emails.map((email) => {
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