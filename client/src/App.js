import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="appDark">
      <div><Outlet/></div>
    </div>
  );
}

export default App;
