import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="app-container">
      <div><Outlet/></div>
    </div>
  );
}

export default App;
