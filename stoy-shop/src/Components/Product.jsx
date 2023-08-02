import './Product.css'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import MyModal from './Modal';
import { MDBIcon } from 'mdb-react-ui-kit';
import {useState, useContext} from 'react';
import { StoreContext } from "../context/Context"

export const Product = (props) => {
    const { addCart } = useContext(StoreContext);

    const [modalShow, setModalShow] = useState(false);

    const {id, productName, price, productImage, category, productDescription, discounted, rating} = props.data

    const starsArray = [];
    
    const  ratingCalculator = (ratingVal) => {
        const calcStars = 5 - ratingVal;


        for(let i = 0; i < ratingVal; i++) {
            starsArray.push(<p key={i}><MDBIcon color='warning' icon='star' className='me-3' /></p>)
        }
        if(calcStars > 0){
            for(let n = 0; n < calcStars; n++) {
            starsArray.push(<p key={`negative-${n}`}><MDBIcon color='secondary' icon='star' className='me-3' /></p>)
            }
        }

        return starsArray;
    }


    return (

    <>
        <div className="product">
                <p className="productHeader">{productName}</p>
            <img src={productImage}/>
            <div className="itemsDescription">
                {/* used to fixed instead of assigning it directly to offer better way of pricing the items */}
                <p className="productDescription">{productDescription}</p>
                {discounted ? 
                <div className="discountedPriceDiv">
                <p className="newPrice">£{Number(price * 0.8).toFixed(2)}</p> 
                <p className="oldPrice">£{Number(price).toFixed(2)}</p>
                </div> 
                : 
                <p>£{Number(price).toFixed(2)}</p>}
            </div>
            <div className="starsRating">
                {ratingCalculator(rating)}
            </div>

                {/* <Alert key={productName} variant="success">
          {productName} Added To Cart
        </Alert> */}
            <button className="addBtn" onClick={() => addCart(id)}>
                    Add To Cart
                </button>
                <Button variant="link" onClick={() => setModalShow(true)}>More Info</Button>
                
                <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
        </div>
</>
    )
}


