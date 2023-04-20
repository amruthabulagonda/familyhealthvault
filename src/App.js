import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import MyRecords from './components/MyRecords';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<WelcomePage/>}></Route>
      <Route path="/register" element={<RegistrationPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
      <Route path="/myrecords" element={<MyRecords/>}></Route>
     </Routes>
  </Router>
  );
}

export default App;
