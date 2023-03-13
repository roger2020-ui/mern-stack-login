import './App.css';
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import { useState } from 'react';
function App() {
  const [user, setLoginUser] = useState({

  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={Homepage}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register />}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;