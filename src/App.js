import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import RecipieList from './components/RecipieList';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='home-page-1'>
      <Routes><Route
            path="/"
            element={
              <>
                <title>Reciepie App</title>
                {/* <Header/> */}
                <RecipieList/>
                <Footer/>
              </>
            }
          /></Routes>
       
      </div>
      
    </Router>
  );
}

export default App;
