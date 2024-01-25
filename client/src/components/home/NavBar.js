import React from 'react'
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  };
  const navigateToStatistics = () => {
    navigate('/Statistics')
  };
  const navigateToCompanies = () => {
    navigate('/Companies')
  };

  const navigateToContacts = () => {
    navigate("/Contacts")
  }

  const navigateToReplies = () => {
    navigate("/Replies")
  }

  return (
    <nav className='navbar'>
      <ul>
        <li><h1>Email Trace</h1></li>
        <li><button onClick={navigateToHome}>Home</button></li>
        <li><button onClick={navigateToStatistics}>Statistics</button></li>
        <li><button onClick={navigateToCompanies}>Companies</button></li>
        <li><button onClick={navigateToContacts}>Contacts</button></li>
        <li><button onClick={navigateToReplies}>Replies</button></li>
      </ul>
    </nav>
  )
}
export default NavBar;