import { useState } from "react";
import { PRICECHECKBOXES } from "../Data/PRICECHECKBOXES";
import { BRANDCHECKBOXES } from "../Data/BRANDCHECKBOXES";
import './Filter.css'

import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import { useContext } from 'react';
import { StoreContext } from '../context/Context';

export const Filter = ({handleSortBy, handleSortByCategories, page}) => {


    const [checkboxCounterPrice, setCheckboxCounterPrice] = useState({});
    const [checkboxCounterBrand, setCheckboxCounterBrand] = useState({});

    const { sortByPrice, removeSortByPrice, sortByBrand, removeSortByBrand} = useContext(StoreContext);
    
    const handleCheckBoxSelectedPrice = (e) => {
        const dataId = e.target.getAttribute('data-id');
        if(e.target.checked === true){
            sortByPrice(dataId)
        }else {
            removeSortByPrice(dataId)
        }
    }
    const handleCheckBoxSelectedBrand = (e) => {
        const dataId = e.target.getAttribute('data-id');
        if(e.target.checked === true){
            sortByBrand(dataId)
        }else {
            removeSortByBrand(dataId)
        } 
    }

    const handleSortByFunc = (e) =>{
        if(page === "1"){
            handleSortBy(e.target.value)
        }else if (page === "2"){
            handleSortByCategories(e.target.value)
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
                    key={`checkbox-${checkboxes.id}`}
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
                    key={`checkbox-brand-${checkboxes.id}`}
                    type='checkbox'
                    id={`checkbox-brand-${checkboxes.id}`}
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
                
                <Form.Select aria-label="Default select example" onChange={(e) => handleSortByFunc(e)}>
                    <option value="">Sort: Relevance</option>
                    <option value="1">Alphabetically: A - Z</option>
                    <option value="2">Alphabetically: Z - A</option>
                    <option value="3">Price: low to high</option>
                    <option value="4">Price: high to low</option>
                </Form.Select>
                </div>
            </div>
    )
}