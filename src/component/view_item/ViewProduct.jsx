import React from "react";
import "./view-product.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/Footer";
import ScrollingProduct from "../scrolling_product/ScrollingProduct";
import GlobalApi from "../../../Api/GlobalApi";

const ViewProduct = () => {
  const { productid } = useParams();
  const [viewProduct, setviewProduct] = useState();
  const [cartCount, setcartCount] = useState();
  useEffect(() => {
    const res = GlobalApi.getProductById(productid);
    setviewProduct(res);
  }, [productid]);

  if (cartCount) {
    GlobalApi?.Store_cart_count(viewProduct);
  }

  const handelCount = () => {
    setcartCount(viewProduct);

    GlobalApi?.Store_cart_count(viewProduct);
  };

  return (
    <>
      <div className="main_layout">
        <div className="nav">
          <NavBar />
        </div>
        <div className="body">
          <div className="product_view_container">
            <main>
              <img
                class="headset"
                src={viewProduct?.imgSrc}
                alt="SomeThing Went wrong"
              />

              <div id="cart-text">
                <button class="free-shipping">Free shipping</button>
                <h2>Some Random Expensive and Gorgeous Pink Headset</h2>
                <h3>R$ 1.599,00</h3>
                <h1>R$ 799,00</h1>
                <h4>
                  The offer is valid until April 3, or as long as stock lasts!
                </h4>
                <button class="add-to-cart" onClick={handelCount}>
                  Add to Cart
                </button>
                <h3 class="stock">
                  <i class="fa-solid fa-circle"></i> 50+ pcs. in stock.
                </h3>

                <div id="buttons">
                  <button class="add-to-cart-2">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                  </button>
                  <button class="add-to-wishlist">
                    <i class="fa-solid fa-heart"></i> Add to wishlist
                  </button>
                </div>
              </div>
            </main>
          </div>

          <ScrollingProduct />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
