import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Home/HomePage';
import ProductPage from '../Products/ProductPage';
import SingleProductPage from '../SingleProduct/SingleProductPage';
import CartPage from '../Cart/CartPage';
import MyOrderPage from '../MyOrder/MyOrderPage';
import LoginPage from '../Authentication/LoginPage';
import SignupPage from '../Authentication/SignupPage';
import Logout from '../Authentication/Logout';

const Routing = ( { addToCart, cart } ) => {
  return (
    <Routes>
      <Route path='/'  element={ <HomePage /> } />
      <Route path='/products'  element={ <ProductPage /> } />
      <Route path='/products/:id'  element={ <SingleProductPage addToCart={addToCart} /> } />
      <Route path='/signup'  element={ <SignupPage /> } />
      <Route path='/login'  element={ <LoginPage /> } />
      <Route path='/cart'  element={ <CartPage cart={cart} /> } />
      <Route path='/myorders'  element={ <MyOrderPage /> } />
      <Route path='/logout' element={ <Logout /> } />
    </Routes>
  )
}
export default Routing
