import React from 'react';
import './Footer.css';
import { Assets } from '../../Assets/Assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer_content'>
        <div className='footer_content_left'>
            <img src={Assets.logo} alt='' width={120} height={50}/>
            <p>QuickBite is a cutting-edge food ordering application designed to bring the best dining experience right to your fingertips. Whether you’re craving a juicy burger, a healthy salad, or an exotic dish from a faraway land, QuickBite has got you covered.</p>
            <div className='footer_social_icons'>
                <img src={Assets.fb_icon} alt=''/>
                <img src={Assets.twit_icon} alt=''/>
                <img src={Assets.in_icon} alt=''/>
            </div>
        </div>
        <div className='footer_content_center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer_content_right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 8608373370</li>
                <li>innam8264@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <p className='footer_copyright'>Copyright 2024 © innam8264@gmail.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
