import React, { useState } from "react";
import EmailCard from './EmailCard'
function SideBar({ emails, toggleComponent, handleNewPostClick, deleteTemplate }) {
  const [search, setSearch] = useState('')

  const filtered = emails.filter(email => email.email_title.toUpperCase().includes(search.toUpperCase()))

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <nav id='sidebar'>
      <ul>
        <input placeholder='search' id='searchbar' value={search} onChange={updateSearch}></input>
        <div id='composedbuttoncontainer'><button onClick={handleNewPostClick} id="composedbutton">NewPost</button></div>
        {filtered.map((email) => (
          <EmailCard
            key={email.id}
            email={email}
            toggleComponent={toggleComponent}
            deleteTemplate={deleteTemplate}
          />
        ))}
      </ul>
    </nav>
  );
}
export default SideBar;