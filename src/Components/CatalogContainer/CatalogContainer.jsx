import React, {Fragment, useState, useEffect} from 'react';
import styles from './catalogContainer.module.css'
import axios from 'axios'


//Components import

import Spinner from '../Spinner/Spinner'
import FiltersContainer from '../FiltersContainer/FiltersContainer'
import Catalog from '../Catalog/Catalog'


const CatalogContainer = ()=>{

 // DATA FETCH

 const[prod, setProd] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3002/products?_page=10&_limit=15')
    .then(res => {
        setProd(res.data)

    })
},[])

console.log(prod)

//SPINNER TEST

    let spineron = false;


    


// PRODUCT SORT

    const [sort, setSort] = useState('')

    const sortProducts = event => {
        setSort(event.target.value) 
    }

    let sortProductos = () => {
    let aux = sort
    if(sort === 'Low price - Ascendant'){
        return aux.sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
    }
    if(sort === 'High price - Descendant'){
        return aux.sort((a,b) => parseFloat(b.price) - parseFloat(a.price))
    }
    return aux
} 


    

    return(
        <Fragment>
            {spineron ? 
                <Spinner />

                
                    :
                    <div >
                        <div className = {`${styles.catalogContainer}`}>
                                <h2 className={`m-0 text-center p-5`}>Look and Sort our amazing EMOJIS!! </h2>
                                <div className={`col-10  ${styles.catalogSearchBar}`}>
                                    <FiltersContainer 
                                    
                                        count={sort.length}
                                        sortProducts={sortProducts}
                                    />
                                </div>
                                <div className={`col-12 p-2`}>
                                    <Catalog     
                                        products={sortProductos()}
                                    />
                                </div>
                        </div>
                    </div>
            }
        </Fragment>
    )};


export default CatalogContainer;