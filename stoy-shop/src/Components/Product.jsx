import './Product.css'

export const Product = (props) => {

    const {id, productName, price, productImage, category} = props.data
    return (
        <div className="product">
                <p className="productHeader">{productName}</p>
            <img src={productImage}/>
            <div className="itemsDescription">
                {/* used to fixed instead of assigning it directly to offer better way of pricing the items */}
                <p>£{Number(price).toFixed(2)}</p>
            </div>
            <button className="addBtn">
                    Add To Cart
                </button>
        </div>
    )
}