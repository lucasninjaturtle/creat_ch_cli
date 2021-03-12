import React, { Fragment, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
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
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />}
    </>
  );
};

export default Catalog;
