export const CartItem = ({data}) => {
    const {id, productName, price, productImage, category, productDescription, discounted, rating} = data;

 
    return (
        <div>
            <img src={productImage}/>
            <div>
                <p><b>{productName}</b></p>
                <p><b>{price}</b></p>
            </div>
        </div>
    )
}