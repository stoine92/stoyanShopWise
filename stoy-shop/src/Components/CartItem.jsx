import './CartItem.css'
import { useContext } from 'react';
import { StoreContext } from '../context/Context';

export const CartItem = ({data}) => {
    const {id, productName, price, productImage, category, productDescription, discounted, rating} = data;
    const { cartItems, addCart, removeCart, updateCountItems } = useContext(StoreContext);
 
    return (
        <div className="cartProduct">
                <p className="cartProductHeader"><b>{productName}</b></p>
           
            <img src={productImage} alt={`Product Image: ${productName}`}/>
            <div>
                <div className="cartItemsDescription">
                {/* used to fixed instead of assigning it directly to offer better way of pricing the items */}
                <p className="cartProductDescription">{productDescription}</p>
                {discounted ? 
                <>
                <p><b>Price</b></p>
                <p>£{(Number(price) * 0.8).toFixed(2)}</p> 
                </> 
                : 
                <>
                <p><b>Price</b></p>
                <p>£{(Number(price)).toFixed(2)}</p>
                </>
                }
            </div>
            </div>
            <div className="counterContainer">
            <button className="decreaseBtn" onClick={() => removeCart(id)}>-</button>
            <input type="number" value={cartItems[id]}/>
            <button className="incrementBtn" onClick={() => addCart(id)}>+</button>
            </div>
            </div>
        
    )
}

