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
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
          <Route path='/consultancy' element={<Consultancy/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/*' element= {<></>}></Route> {/* TODO:- Not Found page*/}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
