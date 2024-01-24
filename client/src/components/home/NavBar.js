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

  return (
    <nav className='navbar'>
      <ul>
        <li><h1>Email Tracker</h1></li>
        <li><button onClick={navigateToHome}>Home</button></li>
        <li><button onClick={navigateToStatistics}>Statistics</button></li>
        <li><button onClick={navigateToCompanies}>Companies</button></li>

      </ul>
    </nav>
  )
}
export default NavBar;