import { Product } from "../../Components/Product"
import { PRODUCTS } from "../../Data/PRODUCTS"
import './HomePage.css';
import { useState, useEffect } from 'react';
import {Filter} from "../../Components/Filter";
import Carousel from 'react-bootstrap/Carousel';

import testImg from '../../Images/personal.jpeg'


function HomePage (props) {
    
    
    const productsPerPage = 6; 
    const [countDisplayed, setCountDisplayed] = useState(0);
    const [step, setStep] = useState(productsPerPage);
    //HERE
   const [selectedFilters, setSelectedFilters] = useState([]);
   const [filteredItems, setFilteredItems] = useState(PRODUCTS);

    let filters = [1, 2, 3, 4]

   const handleFilterButtonClick = (selectedCategory) => {
    //    if(selectedFilters.includes(selectedCategory)){
    //     let filters = selectedFilters.filter((el) => el !== selectedCategory);
    //     setSelectedFilters(filters)
    //    }else {
    //     setSelectedFilters([...selectedFilters, selectedCategory])
    //    }
   }
    
   
    
 

    const  handleShowMoreBtn = () => {
        const countItemsRemaining = PRODUCTS.length - countDisplayed;
        const toShowItems = Math.min(step, countItemsRemaining);


        setCountDisplayed((prevItems) => prevItems + toShowItems)
    }

   
    const disableButtonChecker = countDisplayed >= PRODUCTS.length;
    // carrousel 
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const onFilterValueSelected = (filterValue) => {
    handleFilterButtonClick(Number(filterValue))
  }

    useEffect(() => {
        setCountDisplayed(PRODUCTS.length >= productsPerPage ? productsPerPage : PRODUCTS.length)
    },[props.heading])

//    useEffect(() => {
//     filterItems()
//    }, [selectedFilters])

//    const filterItems = () => {
//        if(selectedFilters.length > 0){
//            let tempItems = selectedFilters.map((selectedCategory) => {
//                let temp = PRODUCTS.filter((item) => item.category === selectedCategory);
//                return temp;
//            })
//            setFilteredItems(tempItems.flat())
//            console.log(filteredItems)
//        }else {
//         setFilteredItems([...PRODUCTS])
//        }
//    }
    return (
      
        <div className="mainWrapDiv">
            
            <Filter onFilterValueSelected={onFilterValueSelected}/>
            
            <div className="componentsDiv"> 
            <div className="itemCounterDiv">
                <p>1-{countDisplayed} over {PRODUCTS.length} results for <span className="itemCategoryCounter">"{props.heading}"</span></p>
            </div>
            {/* <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img src={testImg} /> 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
                <div className="header">
                <h1>{props.heading}</h1>
                </div>
                <div className='productList'>
                {/* {PRODUCTS.slice(0, countDisplayed).map((item, index) => (
                    <Product key={item.id} data={item} />
                ))} */}
                {filteredItems.map((item, index) => (
                    <Product key={item.id} data={item} />
                ))}
                </div>
                {!disableButtonChecker && (
                    <div className="loadMoreBtnWrap">
                <span className="loadMoreBtn" onClick={handleShowMoreBtn}>Show More</span>
                </div>
                )}
            </div>
            </div>
    )
}


export default HomePage






