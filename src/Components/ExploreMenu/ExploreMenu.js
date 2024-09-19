import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../Assets/Assets';


// Declares a functional component named ExploreMenu that takes two props
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore_menu' id='explore_menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore_menu_text'>Experience the joy of dining from the comfort of your home with our fast and reliable delivery service. At Foodie Delight, we pride ourselves on offering fresh ingredients, delectable flavors, and exceptional customer service.</p>
      <div className='explore_menu_list'>
        {
            menu_list.map((item,index) => {
                return (
                    <div onClick={() => setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='explore_menu_list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_img} />
                        <p>{item.menu_name}</p>
                    </div>
                        
                )
            })
        }
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu
