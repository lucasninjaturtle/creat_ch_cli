import React, { Fragment, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./catalog.module.css";

// Styles
import { Content } from "./Catalog.styles";

//SPINNER
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Catalog = ({ prod, handleScroll, loading }) => {
  return (
    <>
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
