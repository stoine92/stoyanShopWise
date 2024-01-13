import { Product } from "../../Components/Product/Product"
import { PRODUCTS } from "../../Data/PRODUCTS"
import './HomePage.css';
import { useState, useEffect, useContext } from 'react';
import {Filter} from "../../Components/Filter/Filter";

import { StoreContext } from '../../context/Context';
import { sortByPriceBrand } from "./HomePageFuncs";

function HomePage (props) {
  const { sortByPriceObj, sortByBrandObj, setSortByPriceObj, setSortByBrandObj } = useContext(StoreContext);
    
    const productsPerPage = 6; 
    const [countDisplayed, setCountDisplayed] = useState(0);
    const [step, setStep] = useState(productsPerPage);
    const [lengthForDisplay, setLengthForDisplay] = useState(0)

   const [filteredProducts, setFilteredProducts] = useState([])

    const  handleShowMoreBtn = () => {
        const countItemsRemaining = lengthForDisplay - countDisplayed;
        const toShowItems = Math.min(step, countItemsRemaining);


        setCountDisplayed((prevItems) => prevItems + toShowItems)
    }

    const disableButtonChecker = countDisplayed >= lengthForDisplay;
    const [sortedValue, setSortedValue] = useState(PRODUCTS)

    const handleSortBy = (sortType) => {
     
      switch(sortType){
        case "1": const sortingAsc = [...sortedValue].sort((a, b) => a.productName.localeCompare(b.productName)); setSortedValue(sortingAsc); break;
        case "2": const sortingDesc = [...sortedValue].sort((a, b) => b.productName.localeCompare(a.productName)); setSortedValue(sortingDesc); break;
        case "3": const sortingAlph = [...sortedValue].sort((a, b) => a.price - b.price); setSortedValue(sortingAlph); break;
        case "4": const sortingNegAlph = [...sortedValue].sort((a, b) => b.price - a.price); setSortedValue(sortingNegAlph); break;
        default: setSortedValue([...PRODUCTS]);
      }
    }


    useEffect(() => {
        setCountDisplayed(lengthForDisplay >= productsPerPage ? productsPerPage : lengthForDisplay)
    },[props.heading, lengthForDisplay])


  useEffect(() => {
    sortByPriceBrand({
      sortByPriceObj, 
      sortByBrandObj, 
      sortedValue, 
      setFilteredProducts, 
      setLengthForDisplay, 
      countDisplayed
    });

  }, [sortByPriceObj, sortByBrandObj, countDisplayed, sortedValue]);

  useEffect(() => {
    setSortByPriceObj({})
    setSortByBrandObj({})

      setFilteredProducts(PRODUCTS.slice(0, countDisplayed));
      setLengthForDisplay(PRODUCTS.length)
    
  }, [props.heading]);

    return (
      
        <div className="mainWrapDiv">
            
            <Filter handleSortBy={handleSortBy} page="1"/>
            
            <div className="componentsDiv"> 
            <div className="itemCounterDiv">
               
             <p>{countDisplayed > 0 
            ? 
            `1-${countDisplayed} over ${lengthForDisplay}` : countDisplayed} results for <span className="itemCategoryCounter">"{props.heading}"</span></p>
            </div>
            
                <div className="header">
                <h1>{props.heading}</h1>
                </div>
                <div className="productList">
              {filteredProducts.map((item) => ( <Product key={item.id} data={item} /> ))}
                </div>
                {!disableButtonChecker && (
                    <div className="loadMoreBtnWrap">
                <span className="loadMoreBtn" onClick={handleShowMoreBtn}>Show More</span>
                </div>
                )}
            </div>
            </div>
    )
}


export default HomePage





