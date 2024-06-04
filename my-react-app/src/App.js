import React from 'react';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import RecentlyAdded from './Pages/RecentlyAdded';
import SellBooks from './Pages/SellBooks';
import Books from './Pages/Books'
import Classic from './Pages/Classic';
import Children from './Pages/Children';
import Fiction from './Pages/Fiction';
import Urdu from './Pages/Urdu';
import Educational from './Pages/Educational ';
import Comics from './Pages/Comics';
import Footer from './Component/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Checkout from './Pages/Checkout';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/comics' element={<Comics/>} />
          <Route path='/educational' element={<Educational/>} />
          <Route path='/urdu' element={<Urdu />} />
          <Route path='/fiction' element={<Fiction />} />
          <Route path='/classic' element={<Classic />} />
          <Route path='/children' element={<Children />} />
          <Route path='/' element={<Books />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/recentlyadded' element={<RecentlyAdded />} />
          <Route path='/sellbooks' element={<SellBooks />} />
          <Route path='/product' element={<Product />} />
          

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
