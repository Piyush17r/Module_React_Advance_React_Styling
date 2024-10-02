import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Website/Componant/Header';
import FeaturedCategories from './Website/pages/Feature';
import FooterComponent from './Website/Componant/Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Hero from './Website/pages/Home';
import Home from './Website/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home/>
   {/* <BrowserRouter>
   <Routes>
    <Route path='/'element={<Home/>}/>
    </Routes>
    </BrowserRouter> */}
   </div>

);
}
export default App;
