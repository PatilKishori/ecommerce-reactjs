import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Element from './admincomp/Element';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Categories from './admincomp/categories';
import Category from './admincomp/category';
import Dashboard from './admincomp/Dashboard';
import Product from './admincomp/product';
import Products from './admincomp/products';
import Variety from './admincomp/varieties';
function App() {
  return (
    <div>
      
       <BrowserRouter>
      <Header />
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path="/admin/login" element={<Login />}></Route>
        <Route path="/admin/dashboard" element={<Element />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/categories" element={<Categories />}></Route>
        <Route path='/admin/category/:id' element={<Category/>}/>
        <Route path='/admin/product/:id' element={<Product/>}/>
        <Route path="/categories/category" element={<Category />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
        <Route path="/admin/product" element={<Product />}></Route>
        <Route path="/product/varieties/:id" element={<Variety />}></Route>
        
   </Routes>
   <Footer />  
    </BrowserRouter>

           
    </div>
  );
}

export default App;
