import { PRODUCTS } from "../../Data/PRODUCTS";
import {StoreContext} from "../../context/Context"
import { useContext } from "react";
import { CartItem } from "../../Components/CartItem/CartItem";
import './Cart.css';
import { Link } from 'react-router-dom'
function Cart () {
    const {cartItems, getTotalPrice} = useContext(StoreContext);
    const totalPrice = getTotalPrice();
    return (
        <div className="cartMainWrapDiv">
                    <div className="cartComponentsDiv">
                    <div className="header">
                        <h1>{totalPrice <= 0 ? `Your Basket Is Empty` : `Your Cart Items`}</h1>
                    </div>
                    <div className="checkoutWrap">
                        <p className="totalP"><b>Subtotal: </b>£{totalPrice.toFixed(2)}</p>
                    <div className="checkout">  
                        <Link to="/" className="cartBtn" >Continue Shopping</Link>
                       {totalPrice <= 0 ? "" : <span className="cartBtn" >Checkout</span>} 
                    </div>
                        </div>
                    <div className="cartProductList">
                        {PRODUCTS.map((item) => {
                            if(cartItems[item.id] !== 0){
                                return <CartItem data={item}/>
                            } 
                        })}
                    </div>
                    
                    </div>
        </div>
    )
}


export default Cart;