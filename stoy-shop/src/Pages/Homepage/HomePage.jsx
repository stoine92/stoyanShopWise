import { Product } from "../../Components/Product"
import { PRODUCTS } from "../../Data/PRODUCTS"
import './HomePage.css';
function HomePage () {
    return (
        <div > 
            <div className="header">
            <h1>Homepage</h1>
            </div>
            <div className='productList'>
            {PRODUCTS.map((item) => (
                <Product key={item.id} data={item} />
            ))}
            </div>
        </div>
    )
}


export default HomePage