import React, {Fragment, useState} from 'react';
import styles from './filterscontainer.module.css'


const FiltersContainer = ({handleChange})=>{

    
   let count = 100;
    return(
        <Fragment>
                <div className={`${styles.searchBarContainer}`}>
                    <div>
                        <span className={`${styles.counterSpan}`}>
                            ({count}){count === 1 ? ' Product' : ' Products'}
                        </span>
                    </div>
                    
                </div>
                <div className={`${styles.precioContainer}`}>
                    <span>Sort by: </span>
                    <select 
                        className={`${styles.precioSearchbar} form-control`}
                        onChange={handleChange}
                    >
                        <option value="price">Price</option>
                        <option value="size">Size</option>
                        <option value="id">ID</option>
                    </select>
                </div>

        </Fragment>
    )};


export default FiltersContainer;