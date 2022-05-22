import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Admin from './components/admin';
import Home from './components/home';
import  Footer  from './components/footer';
import Login from './components/login';
import Shope from './components/shop';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    
        
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shope />} />
     
    </Routes>
    </Router>
      
  <Footer />
    </>
  );
}

export default App;
