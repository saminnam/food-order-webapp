import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place_order'>
       <div className='place_order_left'>
          <p className='title'>Delivery Information</p>
          <div className='multi_fields'>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
          </div>
          <input type='email' placeholder='Email address'/>
          <input type='text' placeholder='Street'/>
          <div className='multi_fields'>
            <input type='text' placeholder='City'/>
            <input type='text' placeholder='State'/>
          </div>
          <div className='multi_fields'>
            <input type='text' placeholder='Zip code'/>
            <input type='text' placeholder='Country'/>
          </div>
          <input type='text' placeholder='Phone'/>
       </div>
       <div className='place_order_right'>
       <div className='cart_total'>
          <h2>Cart Totals</h2>
          <div className=''>
            <div className='cart_total_details'>
              <p>Sub Totals</p>
              <p>╣{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart_total_details'>
              <p>Delivery Fee</p>
              <p>+{getTotalCartAmount()===0?0:30}</p>
            </div>
            <hr/>
            <div className='cart_total_details'>
              <b>Total</b>
              <b>╣{getTotalCartAmount()===0?0:getTotalCartAmount()+30}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
       </div>
    </form>
  )
}

export default PlaceOrder
