import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Crousal from "./component/crowsol/Crousal";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/footer/Footer";
import ScrollingProduct from "./component/scrolling_product/ScrollingProduct";
import Category from "./component/category/Category";
import { SiConekta } from "react-icons/si";

function App() {
  return (
    <>
      <div className="main_layout">
        <div className="nav">
          <NavBar />
        </div>
        <div className="body">
          <div className="stick">
            <span>Flat Rs 200 Off</span> <SiConekta />
          </div>
          <Crousal />
          <ScrollingProduct />
          <Category />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
