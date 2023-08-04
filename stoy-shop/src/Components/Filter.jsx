import { useState } from "react";
import { PRICECHECKBOXES } from "../Data/PRICECHECKBOXES";
import { BRANDCHECKBOXES } from "../Data/BRANDCHECKBOXES";
import { PRODUCTS } from "../Data/PRODUCTS";
import './Filter.css'

import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import { useContext } from 'react';
import { StoreContext } from '../context/Context';

export const Filter = ({onFilterValueSelected}) => {


    const [checkboxCounterPrice, setCheckboxCounterPrice] = useState({});
    const [checkboxCounterBrand, setCheckboxCounterBrand] = useState({});

    const { sortByPrice, removeSortByPrice} = useContext(StoreContext);
    
    const [arr, setArr] = useState([])
    const handleCheckBoxSelectedPrice = (e) => {
        const dataId = e.target.getAttribute('data-id');
        
        onFilterValueSelected(dataId)

        // if(e.target.checked === true){
        //     sortByPrice(dataId)
        // }else {
        //     removeSortByPrice(dataId)
        // }
    }
    const handleCheckBoxSelectedBrand = (e) => {
        if(e.target.checked === true){
            setCheckboxCounterBrand(oldState => oldState + 1)
        }else {
            setCheckboxCounterBrand(oldState => oldState - 1)
        }
    }


    return (
        <div className="filterDiv">
                <div className="filterHeader">
                <h5>Show Results For</h5>
                </div>
                <div className="filterBody">
                
                <Accordion  defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Price {checkboxCounterPrice > 0 && ` (${checkboxCounterPrice})`}</Accordion.Header>
                    <Accordion.Body>
                {PRICECHECKBOXES.map((checkboxes) => (
                    <Form.Check 
                    type='checkbox'
                    id={`checkbox-${checkboxes.id}`}
                    label={checkboxes.label}
                    data-id={checkboxes.id}
                    onChange={(e) => handleCheckBoxSelectedPrice(e)}
                />
                ))}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Brand {checkboxCounterBrand > 0 && ` (${checkboxCounterBrand})`}</Accordion.Header>
                    <Accordion.Body>
                    {BRANDCHECKBOXES.map((checkboxes) => (
                    <Form.Check 
                    type='checkbox'
                    id={`checkbox-${checkboxes.id}`}
                    data-id={checkboxes.id}
                    label={checkboxes.label}
                    onChange={(e) => handleCheckBoxSelectedBrand(e)}
                />
                ))}
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </div>
                <div className="sortHeader">
                <h5>Sort By</h5>
                </div>
                <div className="filterBody">
                
                <Form.Select aria-label="Default select example">
                    <option>Sort: Relevance</option>
                    <option value="1">Alphabetically: A - Z</option>
                    <option value="2">Alphabetically: Z - A</option>
                    <option value="3">Price: low to high</option>
                    <option value="4">Price: low to high</option>
                </Form.Select>
                </div>
            </div>
    )
}