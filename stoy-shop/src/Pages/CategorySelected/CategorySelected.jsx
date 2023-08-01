import { Product } from "../../Components/Product"
import { PRODUCTS } from "../../Data/PRODUCTS"
// import './HomePage.css';
import {useState} from 'react'

function CategorySelected (props) {

    const productsPerPage = 6; 
    const [countDisplayed, setCountDisplayed] = useState(productsPerPage);
    const [step, setStep] = useState(productsPerPage)

    const  handleShowMoreBtn = () => {
        const countItemsRemaining = PRODUCTS.length - countDisplayed;
        const toShowItems = Math.min(step, countItemsRemaining);
        
        setCountDisplayed((prevItems) => prevItems + toShowItems)
    }

    const disableButtonChecker = countDisplayed > PRODUCTS.length;
    console.log(disableButtonChecker)
    return (
            <div> 
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
    )
}


export default CategorySelected