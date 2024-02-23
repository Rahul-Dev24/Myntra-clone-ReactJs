import React from "react";
import "./category.css";
import GlobalApi from "../../../Api/GlobalApi";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";

const Category = () => {
  const [productImg, setproductImg] = useState([]);
  useEffect(() => {
    setproductImg(GlobalApi.ProductImg());
  }, []);

  return (
    <>
      <h1 className="title">SHOP BY CATEGORY</h1>
      <div className="category_container">
        {productImg?.map((item, index) => (
          <Link to={`product/${item.id}`}>
            <Card ProductImg={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
