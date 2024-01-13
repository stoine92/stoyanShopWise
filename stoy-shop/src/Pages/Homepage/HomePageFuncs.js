export const sortByPriceBrand = ({sortByPriceObj, sortByBrandObj, sortedValue, setFilteredProducts, setLengthForDisplay, countDisplayed}) => {
    try {
        let sortByLength = Object.values(sortByPriceObj);
        let sortByBrandLength = Object.values(sortByBrandObj);
    
        if (sortByLength.length > 0 || sortByBrandLength.length > 0) {
          let filtered = [...sortedValue];
      
          if (sortByBrandLength.length > 0) {
         
            filtered = filtered.filter((type) => sortByBrandLength.includes(type.brand));
          }
      
          if (sortByLength.length > 0) {
          
            filtered = filtered.filter((type) => sortByLength.includes(type.priceRange));
          }
          setFilteredProducts(filtered.slice(0, countDisplayed));
          setLengthForDisplay(filtered.length)
        } else {
     
          setFilteredProducts(sortedValue.slice(0, countDisplayed));
          setLengthForDisplay(sortedValue.length)
        }
    }
    catch (error){
        console.log("Error", error)
    }
}