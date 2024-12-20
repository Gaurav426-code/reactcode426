// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage';
import Register from './components/Register';
import Shop from './components/ShoppingApp';
import Product from'./components/Product';
import Detailspage from'./components/Detailpage';
import Mobile from './components/Mobilenews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/detailspage" element={<Detailspage/>} />
        <Route path="/electronics" element={<Mobile/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
