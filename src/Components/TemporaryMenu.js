import React, {useContext} from "react";
import {AppContext } from "../Context/AppContext"
import dishes from './data.json'



export default function TemporaryMenu() {
  const { setShoppingCart } = useContext(AppContext);

  const handleClick = (e) => {
      const dishInTheOrder = {
          quantity: 2,
          dishId: e.target.id
      }
    setShoppingCart((previousState) => [...previousState, dishInTheOrder]);
  };
  return (
    <div className="App">
        TEMPORARY TEST MENU
      <ul>
        {dishes.map((dish) => (
          <li id={dish.id} onClick={handleClick}>
            {dish.dishes} 
          </li>
        ))}
      </ul>
    </div>
  );
}
