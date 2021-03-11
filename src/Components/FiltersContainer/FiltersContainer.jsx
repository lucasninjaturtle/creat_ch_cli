import React, {Fragment, useState} from 'react';
import styles from './filterscontainer.module.css'


const FiltersContainer = ({handleCleanFilters, value, count, sortProducts})=>{

   count = 100;
    return(
        <Fragment>
            <div className="d-flex justify-content-between align-items-center p-2">
                <div className={`${styles.searchBarContainer}`}>
                    <div>
                        <span className={`${styles.counterSpan}`}>
                            ({count}){count === 1 ? ' Product' : ' Products'}
                        </span>
                    </div>
                    
                </div>
                <div className={`${styles.precioContainer}`}>
                    <span>Price: </span>
                    <select 
                        className={`${styles.precioSearchbar} form-control`}
                        onChange={sortProducts}
                    >
                        <option>Price</option>
                        <option value="Ascendant">Ascendant</option>
                        <option value="Descendant">Descendant</option>
                    </select>
                </div>

                <div className={`${styles.precioContainer}`}>
                    <span>Size: </span>
                    <select 
                        className={`${styles.precioSearchbar} form-control`}
                        onChange={sortProducts}
                    >
                        <option>Size</option>
                        <option value="Ascendant">Ascendant</option>
                        <option value="Descendant">Descendant</option>
                    </select>
                </div>

                <div className={`${styles.precioContainer}`}>
                    <span>Id: </span>
                    <select 
                        className={`${styles.precioSearchbar} form-control`}
                        onChange={sortProducts}
                    >
                        <option>Id</option>
                        <option value="Ascendant">Ascendant</option>
                        <option value="Descendant">Descendant</option>
                    </select>
                </div>
                
                <div className={`${styles.trashButtonContainer}`}>
                    <button 
                        className={`btn ${styles.trashButton}`} 
                        onClick={handleCleanFilters}
                        >
                        DELETE FILTER
                        
                    </button>
                </div>
            </div>
        </Fragment>
    )};


export default FiltersContainer;