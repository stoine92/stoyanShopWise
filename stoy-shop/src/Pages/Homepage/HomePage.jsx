import { Product } from "../../Components/Product"
import { PRODUCTS } from "../../Data/PRODUCTS"
import './HomePage.css';
function HomePage () {
    return (
        <div className="home-page-wrap"> 
            <div className="header">
            <h1>Homepage</h1>
            </div>
            <div className='product-list'>
                {" "}
            {PRODUCTS.map((item) => (
                <Product key={item.id} data={item} />
            ))}
            </div>
        </div>
    )
}


export default HomePage