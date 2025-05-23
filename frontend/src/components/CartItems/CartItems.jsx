import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeicon from '../assets/removeicon.png'



const CartItems = () => {
    const {all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id]>0) {
            return <div key={e.id}> 
            <div className="cartitems-format cartitems-format-main">
                <img src={e.images[0].src} alt={e.images[0].alt} className='carticon-product-icon'/>
                <p>{e.brand} {e.name}</p>
                <p>{e.price} €</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.price*cartItems[e.id]} €  </p>
                <img src={removeicon} onClick={()=>{removeFromCart(e.id)}} alt ="" className="removeicon-image"/> 
            </div>
            <hr />
          </div>
        }
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>
            Cart Total
          </h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} €</p>
            </div>
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{getTotalCartAmount()} €</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}
 
export default CartItems
