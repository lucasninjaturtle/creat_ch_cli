import React, {useState} from 'react';
import styles from './productCard.module.css';

const ProductCard = ({ id, size, price, face, date })=>{


    return(
        <div>
      <div className={face}>
        {face? 
        <div style={{height: size, padding:'10px', color:'black', backgroundColor: "transparent"}}>
            {face}
            </div>
        :
        <img
        src={'https://s3.amazonaws.com/f6s-public/profiles/1690030_original.jpg'}
      />
    
    }
          
        
      </div>
      <div className={`${styles.bodyContainer}`}>
        <h4 style={{margin: '1em'}}>id: {id}</h4>
        <hr/>
        <h2 className={`${styles.priceBody}`}>Price: ${price}</h2>
        
        
      </div>
    </div>
    )};


export default ProductCard;