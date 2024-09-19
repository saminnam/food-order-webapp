import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food_display' id='food_display'>
      <h2>Top Dishes near you </h2>
      <div className='food_display_list'>
        {
          food_list.map((item,index) => {
            if (category==="All" || category===item.category) {
              return <FoodItem key={index} id={item._id} name={item.name} desc={item.desc} price={item.price} image={item.image} category={item.category}/>
            }
            
          })
        }
      </div>
    </div>
  )
}

export default FoodDisplay
