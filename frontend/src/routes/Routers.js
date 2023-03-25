

import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Home from "../pages/Home"
import About from "../pages/About"
import Create from "../pages/Create"
import Contact from "../pages/Contact"
import Quiz from '../pages/Quiz'
import Blog from  '../pages/Blog'
// import SellerProfile from "../pages/SellerProfile"
// import EditProfile from "../pages/EditProfile"
// import Wallet from "../pages/Wallet"
// import NFTDetails from "../pages/NFTDetails"



const Routers = () => {
  return (<Routes>
<Route path='/' element = {<Navigate to ='/home'/>} />
<Route path='/home' element = {<Home/>} />
<Route path='/about' element = {<About/>} />
<Route path='/create' element = {<Create/>} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/quiz' element={<Quiz/>} />
{/* <Route path='/edit-profile' element = {<EditProfile/>} />
<Route path='/seller-profile' element = {<SellerProfile/>} /> */}
<Route path='/blog' element = {<Blog/>} />
{/* <Route path='/market/:id' element = {<NFTDetails/>} /> */}
 
  </Routes> 
  );
};

export default Routers