import React, { useContext } from 'react';
import './FoodItem.css';
import { Assets } from '../../Assets/Assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,desc,image}) => {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='food_item'>
      <div className='food_item_img_container'>
        <img className='food_item_image' src={image} alt={name} width={250} height={170}/>
        {
            !cartItems[id]
            ?
            <img  className='add' onClick={() =>addToCart(id)} src={Assets.add}  alt='' width={25}/>
            :
            <div className='food_item_counter'>
                <img onClick={()=> removeFromCart(id)} src={Assets.remove} alt=''/>
                <p>{cartItems[id]}</p>
                <img onClick={() =>addToCart(id)} src={Assets.plus_green} alt=''/>
            </div>
        }
      </div>
      <div className='food_item_info'>
        <div className='food_item_name_rating'>
            <p>{name}</p>
            <img src={Assets.start} alt=''/>
        </div>
        <p className='food_item_desc'>{desc}</p>
        <p className='food_item_price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
