import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage from './Components/HomePage';
import Login from "./Components/LoginPage"
import Signup from './Components/SignupPage';
import Posts from './Components/PostPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
