export const Product = (props) => {

    const {id, productName, price, productImage, category} = props.data
    return (
        <div>
            <img src={productImage}/>
            <div>
                <p><b>{productName}</b></p>
                {/* used to fixed instead of assigning it directly to offer better way of pricing the items */}
                <p><b>£{Number(price).toFixed(2)}</b></p>
            </div>
        </div>
    )
}