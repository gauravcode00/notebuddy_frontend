import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Signup from "./components/Signup";
import Note from "./components/Notes";
import Profile from "./components/Profile";
import { useState } from "react";
import Home from "./components/Home";
import Home2 from "./components/Home2";

function App() {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/note" element={<Note user={user} onLogout={() => setUser(null)} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home2" element={<Home2/>}/>
      </Routes>
    </Router>
  )
}

export default App
