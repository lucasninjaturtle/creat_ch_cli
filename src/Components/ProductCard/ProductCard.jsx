import React, {useState} from 'react';
import styles from './productCard.module.css';

const ProductCard = ({ id, size, price, face, date })=>{


    return(
        <div className={`${styles.productCard} card`}>
      <div className={`${styles.imgContainer}`}>
        
          <img
            src={face ? face : 'https://s3.amazonaws.com/f6s-public/profiles/1690030_original.jpg'}
            className={`${styles.productImg} img-thumbnail`}
          />
        
      </div>
      <div className={`${styles.bodyContainer} card-body`}>
        <h5 className={`${styles.titleBody} card-title`}>{id}</h5>
        <hr/>
        <span className={`${styles.priceBody} card-text`}>Price: ${price}</span>
        
        
        <button>ADD</button>
      </div>
    </div>
    )};


export default ProductCard;