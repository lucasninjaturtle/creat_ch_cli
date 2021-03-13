import React, {Fragment, useState} from 'react';
import styles from './filterscontainer.module.css'


const FiltersContainer = ({handleChange, count})=>{

    
   
    return(
        <Fragment>
                
                    <div>
                        <span className={`${styles.counterSpan}`}>
                            ({count}){count === 1 ? ' Product' : ' Products'}
                        </span>
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