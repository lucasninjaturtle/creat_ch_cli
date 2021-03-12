import React, {Fragment, useState, useEffect} from 'react';
import styles from './catalogContainer.module.css'
import axios from 'axios'


//Components import

import Spinner from '../Spinner/Spinner'
import FiltersContainer from '../FiltersContainer/FiltersContainer'
import Catalog from '../Catalog/Catalog'
import {getProd} from './FetchFunc'
import ProductCard from '../ProductCard/ProductCard'

// Styles
import { Content, Loading } from './CatalogContainer.styles';


const CatalogContainer = ()=>{

 
const [sort, setSort] = useState('price')
 const[prod, setProd] = useState([])
 const [page, setPage] = useState(1);
 const [loading, setLoading] = useState(true);

// HOW MUCH ITEMS *PER* page
const per = 20


//HANDLE INFINITE SCROLL

const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  };

// DATA FETCH


useEffect(() => {
    const loadProd = async () => {
      setLoading(true);
      const newProd = await getProd(page, per, sort);
      setProd((prev) => [...prev, ...newProd]);
      setLoading(false);
      console.log(prod)
    };
    loadProd();
  }, [page, sort]);





// PRODUCT SORT

    
    

    

    // ONCHANGE FROM FILTER

const handleChange = (event) =>{
    setSort(event.target.value)
    setProd([])
  }
  

  


    return(
        <Fragment>
            
                    <div >
                        <div className = {`${styles.catalogContainer}`}>
                                <h2 className={`m-0 text-center p-5`}>Look and Sort our amazing EMOJIS!! </h2>
                                <div className={`col-10  ${styles.catalogSearchBar}`}>
                                    <FiltersContainer 
                                        handleChange={handleChange}

                                    />
                                </div>
                                <div className={`col-12 p-2`}>
                                    <Catalog
                                    handleScroll={handleScroll}
                                    // products={sortedProduct()}
                                    prod={prod}
                                    />
    
                                </div>
                        </div>
                    </div>
            
        </Fragment>
    )};


export default CatalogContainer;