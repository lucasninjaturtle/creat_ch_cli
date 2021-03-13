import React, { Fragment, useState, useEffect } from "react";
import styles from "./catalogContainer.module.css";


//Components import

import FiltersContainer from "../FiltersContainer/FiltersContainer";
import Catalog from "../Catalog/Catalog";
import { getProd } from "./FetchFunc";

const CatalogContainer = () => {
   
  const [sort, setSort] = useState("price");
  const [prod, setProd] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(20)

   // HOW MUCH ITEMS *PER* page
   const per = 20;

  //HANDLE INFINITE SCROLL

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  // DATA FETCH

  useEffect(() => {
    const loadProd = async () => {
      setLoading(true);
      const newProd = await getProd(page, per, sort);
      setProd((prev) => [...prev, ...newProd]);
      setLoading(false);
      console.log(prod);
      
    };
    loadProd();

    if(prod.length > 0) setCount(prod.length)
    return () => {
        setSort()
        setPage()

    }
  }, [page, sort]);

  // ONCHANGE FROM FILTER




  const handleChange = (event) => {
    setSort(event.target.value);
    setProd([]);
  };



  return (
    <Fragment>
      
        <div className={styles.catalogContainer}>
            <div className={styles.title}>
          <h1  style={{color:'#00509d', padding:'30px', backgroundColor:'transparent', border:'10px', fontFamily:'DejaVu Sans Mono, monospace'}}>
            Look and Sort our amazing EMOJIS
          </h1>
          </div>
          <div style={{color:'#00509d'}} className={styles.catalogSearchBar}>
            <FiltersContainer count={count} handleChange={handleChange} />
          </div>
          
            <Catalog
              handleScroll={handleScroll}
              // products={sortedProduct()}
              prod={prod}
              loading={loading}
            />
          
        </div>
      
    </Fragment>
  );
};

export default CatalogContainer;
