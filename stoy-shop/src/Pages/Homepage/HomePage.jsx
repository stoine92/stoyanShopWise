import { Product } from "../../Components/Product"
import { PRODUCTS } from "../../Data/PRODUCTS"
import './HomePage.css';
import {useState} from 'react'

function HomePage () {

    const productsPerPage = 6; 
    const [countDisplayed, setCountDisplayed] = useState(productsPerPage);
    const [step, setStep] = useState(productsPerPage)

    const  handleShowMoreBtn = () => {
        const countItemsRemaining = PRODUCTS.length - countDisplayed;
        const toShowItems = Math.min(step, countItemsRemaining);

        setCountDisplayed((prevItems) => prevItems + toShowItems)
    }

    const disableButtonChecker = countDisplayed >= PRODUCTS.length;

    return (
            <div> 
                <div className="header">
                <h1>Welcome</h1>
                </div>
                <div className='productList'>
                {PRODUCTS.slice(0, countDisplayed).map((item) => (
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


export default HomePage