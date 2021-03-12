import React, {useState} from 'react';
import ProductCard from '../ProductCard/ProductCard'
import Spinner from '../Spinner/Spinner';
import styles from './catalog.module.css'

// Styles
import {Content} from './Catalog.styles'

const Catalog = ({prod, handleScroll, loading})=>{

    
    return(
        <>
        <Content onScroll={handleScroll}>
    {prod.map(product=> 
                        <li id= 'menu'>
                            <ProductCard
                            key={product.id}
                            id = {product.id}
                            name = {product.name}
                            size = {product.size}
                            price = {product.price}
                            date = {product.date}
                            face = {product.face}
                            />
                        </li>
                        )}
      </Content>
      
      {loading && <Spinner/>}
      </>
    )};


export default Catalog;