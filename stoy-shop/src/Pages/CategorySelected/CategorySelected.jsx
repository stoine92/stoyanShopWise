import { Product } from "../../Components/Product"
import { PRODUCTS } from "../../Data/PRODUCTS"
// import './HomePage.css';
import { useState, useEffect } from 'react';
import { Filter } from "../../Components/Filter";

function CategorySelected (props) {

    const test = PRODUCTS.filter((type) => type.category === props.filter).length;
    const productsPerPage = 6; 
    const [countDisplayed, setCountDisplayed] = useState(0);
    const [step, setStep] = useState(productsPerPage)

    const  handleShowMoreBtn = () => {
        const countItemsRemaining = test - countDisplayed;
        const toShowItems = Math.min(step, countItemsRemaining);
        setCountDisplayed((prevItems) => prevItems + toShowItems)
    }

    useEffect(() => {
        setCountDisplayed(test >= productsPerPage ? productsPerPage : test)
    },[props.heading])
    
    const disableButtonChecker = countDisplayed >= test;
    return (
        <div className="mainWrapDiv">

                <Filter /> 

            <div className="componentsDiv"> 
            <div className="itemCounterDiv">
            <p>1-{countDisplayed} over {test} results for <span className="itemCategoryCounter">"{props.heading}"</span></p>
            </div>
                <div className="header">
                <h1>{props.heading}</h1>
                </div>
                <div className='productList'>
                {PRODUCTS.filter((type) => type.category === props.filter).slice(0, countDisplayed).map((item) => (
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