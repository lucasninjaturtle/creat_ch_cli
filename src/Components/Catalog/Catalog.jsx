import React, { Fragment, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./catalog.module.css";

// Styles
import { Content } from "./Catalog.styles";

//SPINNER
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Catalog = ({ prod, handleScroll, loading }) => {
 
  let image;
  let nextImg ;
  image = Math.floor(Math.random()*1000)
  nextImg = image +1

  return (
    <>
    <div className={styles.ProductCard2}>
    <p >But first, a word from our sponsors:</p>
    </div>
       {<img style={{margin:'20px'}} class="ad" src={`http://localhost:3002/ads/?r=${image}`}/>}
      <Content onScroll={handleScroll}>
        {prod.map((product) => (
          <div className={styles.ProductCard}>
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              size={product.size}
              price={product.price}
              date={product.date}
              face={product.face}
            />
            <div id='sponsors'></div>
          </div>
          
        ))}
      </Content>
      {loading && <Loader
        type="Audio"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
        
      />}
     
      

      
    </>
  );
};

export default Catalog;
