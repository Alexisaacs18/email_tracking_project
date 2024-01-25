import React from 'react'
import { useNavigate } from "react-router-dom";

function StatsNav() {
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

  return (
    <nav className='navbar'>
      <ul>
        <li><p>Email Tracker</p></li>
        <li><button onClick={navigateToHome}>Home</button></li>
        <li><button onClick={navigateToStatistics}>Statistics</button></li>
        <li><button onClick={navigateToCompanies}>Companies</button></li>
        <li><button onClick={navigateToContacts}>Contacts</button></li>
      </ul>
    </nav>
  )
}
export default StatsNav;