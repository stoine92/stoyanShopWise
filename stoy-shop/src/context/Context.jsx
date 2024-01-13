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
    const [itemsCount, setItemsCount] = useState(0);
    const [sortByPriceObj, setSortByPriceObj] = useState({})
    const [sortByBrandObj, setSortByBrandObj] = useState({})
   
    const addCart = (item) => {
        setCartItems((prev) => ({...prev, [item]: prev[item] + 1}));
        setItemsCount((oldState) => oldState + 1);
    }
    const removeCart = (item) => {
        setCartItems((prev) => ({...prev, [item]: prev[item] - 1}));
        setItemsCount((oldState) => oldState - 1)

    }
    const getTotalPrice = () => {
        let total = 0;
        for (const item in cartItems){
            if(cartItems[item] > 0) {
                let info = PRODUCTS.find((line) => line.id === Number(item))
                if(info.discounted){
                    total+= cartItems[item] * (info.price * 0.8);
                }else {
                    total+= cartItems[item] * info.price;
                }
            }
        }
        return total;
    }

    const sortByPrice = (item) => {
        switch(item){
            case "1":  setSortByPriceObj((prev) => ({...prev, [item]: 1})); break;
            case "2":  setSortByPriceObj((prev) => ({...prev, [item]: 2})); break;
            case "3":  setSortByPriceObj((prev) => ({...prev, [item]: 3})); break;
            case "4":  setSortByPriceObj((prev) => ({...prev, [item]: 4})); break;
        }
    }
    
    const removeSortByPrice = (item) => {
        const affectedItem = {...sortByPriceObj};
        delete affectedItem[item];
        setSortByPriceObj(affectedItem);
    } 

    const sortByBrand = (item) => {
        switch(item){
            case "5":  setSortByBrandObj((prev) => ({...prev, [item]: 5})); break;
            case "6":  setSortByBrandObj((prev) => ({...prev, [item]: 6})); break;
            case "7":  setSortByBrandObj((prev) => ({...prev, [item]: 7})); break;
            case "8":  setSortByBrandObj((prev) => ({...prev, [item]: 8})); break;
        }
    }
    
    const removeSortByBrand = (item) => {
        const affectedItem = {...sortByBrandObj};
        delete affectedItem[item];
        setSortByBrandObj(affectedItem);
    } 

    const contextValue = {cartItems, addCart, removeCart, itemsCount, getTotalPrice, sortByPrice, removeSortByPrice, sortByPriceObj, sortByBrand, removeSortByBrand, sortByBrandObj, setSortByPriceObj, setSortByBrandObj}
    return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>
}