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

    const addCart = (item) => {
        setCartItems((prev) => ({...prev, [item]: prev[item] + 1}));
        setItemsCount((oldState) => oldState + 1)
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
                total+= cartItems[item] * info.price;
            }
        }
        return total;
    }

    // const sortByPrice = (firstVal, secondVal) => {
    //     const priceSortObj = {
    //         "1": [10, 1200],
    //         "2": [1210, 1800],
    //         "3": [1810, 2600],
    //         "4": [2610, Number.MAX_SAFE_INTEGER]
    //     }
    
    //     const aSortingOrder = priceSortObj[a];
    //     const bSortingOrder = priceSortObj5[b];
    //     return aSortingOrder[0] - bSortingOrder[0] || aSortingOrder[1] - bSortingOrder[1]
    // }

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

    const contextValue = {cartItems, addCart, removeCart, itemsCount, getTotalPrice, sortByPrice, removeSortByPrice, sortByPriceObj}
    return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>
}