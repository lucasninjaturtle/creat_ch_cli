import React, {useState} from 'react';
import ProductCard from '../ProductCard/ProductCard'
import styles from './catalog.module.css'


const Catalog = ({products})=>{

console.log(products)

    return(
        <div className={`${styles.catalogContainer}`}>
        <div className='Catalog'>
            {products.length === 0 ? 
                <p className={`${styles.aviso}`}>
                    Empty Catalog
                </p>
            :
                <>
                    <hr/>
                    <div className={`${styles.catalog}`}>
                        {products.map(product=> 
                        <div>
                            <ProductCard
                            key={product.id}
                            id = {product.id}
                            name = {product.name}
                            description = {product.description}
                            price = {product.price}
                            stock = {product.stock}
                            imgs = {product.imgs}
                            />
                        </div>
                        )}
                    </div>
                    
                </>           
            }
        </div>
    </div>
    )};


export default Catalog;