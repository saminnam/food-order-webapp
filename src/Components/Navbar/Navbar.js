import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Assets } from '../../Assets/Assets';
import { FaBasketShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={Assets.logo} alt="logo" className='logo'/></Link>
      <ul className='navbar_menu'>
        <Link to='/' onClick={() =>setMenu("Home")}  className={menu ==="Home"?"active":""}>Home</Link>
        <a href='#explore_menu' onClick={() =>setMenu("Menu")}  className={menu ==="Menu"?"active":""}>Menu</a>
        <a href='#app_download' onClick={() =>setMenu("Mobile-App")}  className={menu ==="Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={() =>setMenu("Contact-Us")}  className={menu ==="Contact-Us"?"active":""}>Contact-Us</a>
      </ul>
      <div className='navbar_right'>
      <FaSearch />
        <div className='navbar_search_icon'>
        <Link to='/cart'><FaBasketShopping  className='text-secondary'/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
