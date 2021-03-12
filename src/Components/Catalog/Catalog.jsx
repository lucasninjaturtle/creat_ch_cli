import React, {useState} from 'react';
import ProductCard from '../ProductCard/ProductCard'
import Spinner from '../Spinner/Spinner';
import styles from './catalog.module.css'

// Styles
import { Content, Loading } from '../CatalogContainer/CatalogContainer.styles';

const Catalog = ({prod, handleScroll})=>{

    const [loading, setLoading] = useState(true);
    
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
      
      {loading && <Loading>Loading ...</Loading>}
      </>
    )};


export default Catalog;