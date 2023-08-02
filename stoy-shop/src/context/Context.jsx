import { createContext, useState } from "react"
import { PRODUCTS } from "../Data/PRODUCTS"



export const StoreContext = createContext(null)

const defaultCart = () => {
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1; i++ ){
        cart[i] = 0;
    }
    return cart;
}

export const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defaultCart())
    const [itemsCount, setItemsCount] = useState(0)

    const addCart = (item) => {
        setCartItems((prev) => ({...prev, [item]: prev[item] + 1}));
        setItemsCount((oldState) => oldState + 1)
    }
    const removeCart = (item) => {
        setCartItems((prev) => ({...prev, [item]: prev[item] - 1}));
        setItemsCount((oldState) => oldState - 1)

    }

    const contextValue = {cartItems, addCart, removeCart, itemsCount}
    console.log(cartItems)
    return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>
}