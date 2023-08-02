import { PRODUCTS } from "../../Data/PRODUCTS";
import {StoreContext} from "../../context/Context"
import { useContext } from "react";
import { CartItem } from "../../Components/CartItem";

function Cart () {
    const {cartItems} = useContext(StoreContext);

    return (
        <div>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div>
                {PRODUCTS.map((item) => {
                    if(cartItems[item.id] !== 0){
                        return <CartItem data={item}/>
                    } 
                })}
            </div>
        </div>
    )
}


export default Cart;