import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./PlaceOrder.css";
import jsonDishes from '../data.json'
import justDishes from '../dishes.json'

const fakeDishes = [
  { id: 1, img: "", name: "pad thai", category: "thai", price: 4 }, // img, allergies, price, preparationTime
  { id: 2, img: "", name: "pizza", category: "chinese", price: 4 }, // img, allergies, price, preparationTime
  { id: 3, img: "", name: "water", category: "german", price: 4 }, // img, allergies, price, preparationTime
  { id: 4, img: "", name: "couscous salad", category: "norwegian", price: 4 }, // img, allergies, price, preparationTime
];

export default function TemporaryMenu() {
  const { shoppingCart, setShoppingCart,totalPrice } = useContext(AppContext);

  const handleClick = (e) => {
    console.log("dish was clicked", e.target.id);
    setShoppingCart((previousState) => [...previousState, e.target.id]);
  };

  let addRemove = () => {
    return (
      <div className="qty-align">
      <label className="qty-quantity">Qty</label>
                    <select className="add-quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
        <button className="adding-btn"><span>Add </span></button>
        <button className="remove-btn"><span>Remove </span></button>
                    </div>
    )
  }

  return (
    <div className="main-Container">
      <div className="box-Left">
        <div className="order-title">
          <h2>Review Your Order</h2>
        </div>

        {shoppingCart.map((order) => {
          const dish = justDishes.find((dish) => dish.id == order.dishId);
          console.log({ order,jsonDishes });

             return (
            <div className="list-style">
              <div className="li-list">
                <ul className="list">
                  {" "}
                  <ol>
                    <li>
                         <h3 className="dish-name">{dish.name}{addRemove()}</h3>
                      quantity: {order.quantity}
                      subtotal: {order.quantity * dish.price}
                    </li>
                  </ol>{" "}
                </ul>
              </div>
            </div>
          );
        })}      {totalPrice}</div>
     
           <div className="box-right">             <h2>Confirm your delivery details</h2>
                <div className="ordering-area-display">
       <div className="form"> 
                        <input type="text" className="form-control" placeholder="Full name" />
                    </div>
                    <div>
                        <input type="text" className="form-control" placeholder="Phone number" />
                        </div>
                        <textarea placeholder="Delivery Address" className="address-control"></textarea>
                    <div>
                        <button className="order-btn"><span>Order</span></button>
</div>
              

                </div>
      </div>
 </div>
  );
}


