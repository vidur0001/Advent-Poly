import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Products from './Components/Products';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Consultancy from './Components/Consultanecy';
import LoginForm from './Components/Login';
const App = () => {
  return (
    <div className="app-background">
      <title>Advent Poly PVT. LTD</title>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/aboutus' element={<Aboutus/>}></Route>
          <Route exact path='/products' element={<Products/>}></Route>
          <Route exact path='/contactus' element={<Contactus/>}></Route>
          <Route exact path='/consultancy' element={<Consultancy/>}></Route>
          <Route exact path='/login' element={<LoginForm/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
