export const sortByPriceBrand = ({sortByPriceObj, sortByBrandObj, sortedValue, setFilteredProducts, setLengthForDisplay, countDisplayed}) => {
    try {
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
    }
    catch (error){
        console.log("Error", error)
    }
}