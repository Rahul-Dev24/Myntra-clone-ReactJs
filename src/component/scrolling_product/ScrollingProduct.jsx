import React from "react";
import { useEffect, useState } from "react";
import GlobalApi from "../../../Api/GlobalApi";
import Card from "../card/Card";
import "./scrolling-product.css";
import { Link } from "react-router-dom";
const ScrollingProduct = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    setproduct(GlobalApi?.scrolling_product());
  }, []);
  const handleProduct = () => {
    console.log("clicked");
  };
  return (
    <>
      <h1 className="title">MEDAL WORTHY BRANDS TO BAG</h1>

      <div className="scroll_conatiner">
        {product?.map((item, index) => (
          <Link to={`/product/${item.id}`}>
            <Card key={index} Product={item} />
          </Link>
        ))}
      </div>
      <br />
      <br />
      <h1 className="title">GRAND GLOBAL BRANDS</h1>

      <div className="scroll_conatiner">
        {product.slice(0, 6)?.map((item, index) => (
          <Link to={`/product/${item.id}`}>
            <Card key={index} Product={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ScrollingProduct;
