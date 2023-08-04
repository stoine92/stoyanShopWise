import { Product } from "../../Components/Product"
import { PRODUCTS } from "../../Data/PRODUCTS"
// import './HomePage.css';
import { useState, useEffect, useContext } from 'react';
import { Filter } from "../../Components/Filter";
import { StoreContext } from '../../context/Context';
function CategorySelected (props) {
    const { sortByPriceObj, sortByBrandObj } = useContext(StoreContext);

    const test = PRODUCTS.filter((type) => type.category === props.filter).length;
    const productsPerPage = 6; 
    const [countDisplayed, setCountDisplayed] = useState(0);
    const [step, setStep] = useState(productsPerPage)

    const [lengthForDisplay, setLengthForDisplay] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [sortedValue, setSortedValue] = useState(PRODUCTS)
    
    const  handleShowMoreBtn = () => {
        const countItemsRemaining = lengthForDisplay - countDisplayed;
        const toShowItems = Math.min(step, countItemsRemaining);
        setCountDisplayed((prevItems) => prevItems + toShowItems)
    }

    const handleSortByCategories = (sortType) => {
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
    
    const disableButtonChecker = countDisplayed >= lengthForDisplay;



    useEffect(() => {
        let sortByLength = Object.values(sortByPriceObj);
        let sortByBrandLength = Object.values(sortByBrandObj);
    
        if (sortByLength.length > 0 || sortByBrandLength.length > 0) {
          let filtered = [...sortedValue];
            
          if (sortByBrandLength.length > 0) {
              
              filtered = filtered.filter((type) => type.category === props.filter).filter((type) => sortByBrandLength.includes(type.brand));
            }
            
            if (sortByLength.length > 0) {
                
                filtered = filtered.filter((type) => type.category === props.filter).filter((type) => sortByLength.includes(type.priceRange));
            }
            setFilteredProducts(filtered.slice(0, countDisplayed));
            setLengthForDisplay(filtered.length)
        } else {
            setFilteredProducts(sortedValue.filter((type) => type.category === props.filter).slice(0, countDisplayed));
            setLengthForDisplay(sortedValue.filter((type) => type.category === props.filter).length)
        }
      }, [sortByPriceObj, sortByBrandObj, countDisplayed, sortedValue]);


    return (
        <div className="mainWrapDiv">

                <Filter handleSortByCategories={handleSortByCategories} page="2"/> 

            <div className="componentsDiv"> 
            <div className="itemCounterDiv">
            <p>{countDisplayed > 0 
            ? 
            `1-${countDisplayed} over ${lengthForDisplay}` : countDisplayed}   results for <span className="itemCategoryCounter">"{props.heading}"</span></p>
            </div>
                <div className="header">
                <h1>{props.heading}</h1>
                </div>
                <div className='productList'>
                {filteredProducts.map((item) => (
                    <Product key={item.id} data={item} />
                ))}
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


export default CategorySelected