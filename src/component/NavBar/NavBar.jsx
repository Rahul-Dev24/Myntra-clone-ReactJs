import React from "react";
import "./navBar.css";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [home_contaioner, sethome_contaioner] = useState("none");
  const [women, setwomen] = useState("none");
  const [kid, setkid] = useState("none");
  const [living, setliving] = useState("none");
  const [beauty, setbeauty] = useState("none");
  const [store, setstore] = useState("none");
  const [wishList, setwishList] = useState("none");
  const [bag, setbag] = useState("none");

  const js_style = {
    height: "22px",
    width: "22px",
  };
  return (
    <>
      <nav>
        <div className="left">
          <Link to={"/"}>
            <img
              src="https://brandlogovector.com/wp-content/uploads/2021/10/Myntra-Icon-Logo-Small.png"
              alt="load"
            />
          </Link>
        </div>
        <ul>
          <li
            onMouseEnter={() => sethome_contaioner("flex")}
            onMouseLeave={() => sethome_contaioner("none")}
          >
            MEN
          </li>
          <li
            onMouseEnter={() => setwomen("flex")}
            onMouseLeave={() => setwomen("none")}
          >
            WOMEN
          </li>
          <li
            onMouseEnter={() => setkid("flex")}
            onMouseLeave={() => setkid("none")}
          >
            KIDS
          </li>
          <li
            onMouseEnter={() => setliving("flex")}
            onMouseLeave={() => setliving("none")}
          >
            HOME & LIVING
          </li>
          <li
            onMouseEnter={() => setbeauty("flex")}
            onMouseLeave={() => setbeauty("none")}
          >
            BEAUTY
          </li>
          <li
            onMouseEnter={() => setstore("flex")}
            onMouseLeave={() => setstore("none")}
          >
            STUDIO <sup style={{ color: "red" }}>NEW</sup>
          </li>
        </ul>
        <div className="right">
          <div>
            <IoSearch height={30} width={30} />
            <input
              className="search"
              type="text"
              placeholder="Search for products, brands"
            />
          </div>
          <div>
            <Link to={"/profile"}>
              <section>
                <CgProfile style={js_style} />
                <h4>Profile</h4>
              </section>
            </Link>
            <section
              onMouseEnter={() => setwishList("flex")}
              onMouseLeave={() => setwishList("none")}
            >
              <p className="bag_count">1</p>
              <FaRegHeart style={js_style} />

              <h4>Wishlist</h4>
            </section>
            <section
              onMouseEnter={() => setbag("flex")}
              onMouseLeave={() => setbag("none")}
            >
              <p className="bag_count">3</p>
              <MdOutlineShoppingBag style={js_style} />
              <h4>Bag</h4>
            </section>
          </div>
        </div>
        <div className="home" style={{ display: home_contaioner }}>
          <div className="first">
            <h3>Topwear</h3>
            <h4>T-Shirts</h4>
            <h4>Casual Shirts</h4>
            <h4>Formal Shirts</h4>
            <h4>Sweatshirts</h4>
            <h4>Sweaters</h4>
            <h4>Jackets</h4>
            <h4>Blazers & Coats</h4>
            <h4>Suits</h4>

            <h4>Rain Jackets</h4>
            <br />
            <hr />
            <br />
            <h3>Indian & Festive Wear</h3>
            <h4>Kurtas & Kurta Sets</h4>
            <h4>Sherwanis</h4>
            <h4>Nehru Jackets</h4>
            <h4>Dhotis</h4>
          </div>
          <div className="second">
            <h3>Bottomwear</h3>
            <h4>Jeans</h4>
            <h4>Casual Trousers</h4>
            <h4>Formal Trousers </h4>
            <h4>Shorts Track</h4>
            <h4>Pants & Joggers</h4>
            <br />
            <hr />
            <br />
            <h3>Innerwear & Sleepwear</h3>
            <h4>Briefs & Trunks</h4>
            <h4>Boxers</h4>
            <h4>Vests</h4>
            <h4>Sleepwear & Loungewear</h4>
            <h4>Thermals</h4>
            <br />
            <hr />
            <br />
            <h3>Plus Size</h3>
          </div>
          <div className="thrid">
            <h3> Footwear</h3>
            <h4>Casual Shoes</h4>
            <h4>Sports Shoes</h4>
            <h4>Formal Shoes</h4>
            <h4>Sneakers</h4>
            <h4>Sandals & Floaters</h4>
            <h4>Flip Flops</h4>
            <h4>Socks</h4>
            <br />
            <hr />
            <br />
            <h3>Personal Care & Grooming</h3>
            <h3>Sunglasses & Frames</h3>
            <h3>Watches</h3>
          </div>
          <div className="fourth">
            <h3>Sports & Active Wear</h3>
            <h4>Sports Shoes</h4>
            <h4>Sports Sandals</h4>
            <h4>Active T-Shirts</h4>
            <h4>Track Pants & Shorts</h4>
            <h4>Tracksuits</h4>
            <h4>Jackets & Sweatshirts</h4>
            <h4>Sports Accessories</h4>
            <h4>Swimwear</h4>
            <br />
            <hr />
            <br />
            <h3> Gadgets</h3>
            <h4>Smart Wearables</h4>
            <h4>Fitness Gadgets</h4>
            <h4>Fitness Gadgets</h4>
            <h4>Headphones</h4>
            <h4>Speakers</h4>
          </div>
          <div className="fivth">
            <h3>Fashion Accessories</h3>
            <h4>Wallets</h4>
            <h4>Belts</h4>
            <h4>Perfumes & Body Mists</h4>
            <h4>Trimmers</h4>
            <h4>Deodorants</h4>
            <h4>Ties, Cufflinks & Pocket Squares</h4>
            <h4>Accessory Gift Sets</h4>
            <h4>Caps & Hats</h4>
            <h4>Mufflers, Scarves & Gloves</h4>
            <h4>Phone Cases</h4>
            <h4>Rings & Wristwear</h4>
            <h4>Helmets</h4>

            <br />
            <hr />
            <br />
            <h3> Bags & Backpacks</h3>
            <h3>Luggages & Trolleys</h3>
          </div>
        </div>

        <div className="women" style={{ display: women }}>
          <div className="second">
            <h3>Bottomwear</h3>
            <h4>Jeans</h4>
            <h4>Casual Trousers</h4>
            <h4>Formal Trousers </h4>
            <h4>Shorts Track</h4>
            <h4>Pants & Joggers</h4>
            <br />
            <hr />
            <br />
            <h3>Innerwear & Sleepwear</h3>
            <h4>Briefs & Trunks</h4>
            <h4>Boxers</h4>
            <h4>Vests</h4>
            <h4>Sleepwear & Loungewear</h4>
            <h4>Thermals</h4>
            <br />
            <hr />
            <br />
            <h3>Plus Size</h3>
          </div>
          <div className="thrid">
            <h3> Footwear</h3>
            <h4>Casual Shoes</h4>
            <h4>Sports Shoes</h4>
            <h4>Formal Shoes</h4>
            <h4>Sneakers</h4>
            <h4>Sandals & Floaters</h4>
            <h4>Flip Flops</h4>
            <h4>Socks</h4>
            <br />
            <hr />
            <br />
            <h3>Personal Care & Grooming</h3>
            <h3>Sunglasses & Frames</h3>
            <h3>Watches</h3>
          </div>
          <div className="fourth">
            <h3>Sports & Active Wear</h3>
            <h4>Sports Shoes</h4>
            <h4>Sports Sandals</h4>
            <h4>Active T-Shirts</h4>
            <h4>Track Pants & Shorts</h4>
            <h4>Tracksuits</h4>
            <h4>Jackets & Sweatshirts</h4>
            <h4>Sports Accessories</h4>
            <h4>Swimwear</h4>
            <br />
            <hr />
            <br />
            <h3> Gadgets</h3>
            <h4>Smart Wearables</h4>
            <h4>Fitness Gadgets</h4>
            <h4>Fitness Gadgets</h4>
            <h4>Headphones</h4>
            <h4>Speakers</h4>
          </div>
          <div className="fivth">
            <h3>Fashion Accessories</h3>
            <h4>Wallets</h4>
            <h4>Belts</h4>
            <h4>Perfumes & Body Mists</h4>
            <h4>Trimmers</h4>
            <h4>Deodorants</h4>
            <h4>Ties, Cufflinks & Pocket Squares</h4>
            <h4>Accessory Gift Sets</h4>
            <h4>Caps & Hats</h4>
            <h4>Mufflers, Scarves & Gloves</h4>
            <h4>Phone Cases</h4>
            <h4>Rings & Wristwear</h4>
            <h4>Helmets</h4>

            <br />
            <hr />
            <br />
            <h3> Bags & Backpacks</h3>
            <h3>Luggages & Trolleys</h3>
          </div>
        </div>

        <div className="kid" style={{ display: kid }}>
          <div className="first">
            <h3>Topwear</h3>
            <h4>T-Shirts</h4>
            <h4>Casual Shirts</h4>
            <h4>Formal Shirts</h4>
            <h4>Sweatshirts</h4>
            <h4>Sweaters</h4>
            <h4>Jackets</h4>
            <h4>Blazers & Coats</h4>
            <h4>Suits</h4>

            <h4>Rain Jackets</h4>
            <br />
            <hr />
            <br />
            <h3>Indian & Festive Wear</h3>
            <h4>Kurtas & Kurta Sets</h4>
            <h4>Sherwanis</h4>
            <h4>Nehru Jackets</h4>
            <h4>Dhotis</h4>
          </div>
          <div className="second">
            <h3>Bottomwear</h3>
            <h4>Jeans</h4>
            <h4>Casual Trousers</h4>
            <h4>Formal Trousers </h4>
            <h4>Shorts Track</h4>
            <h4>Pants & Joggers</h4>
            <br />
            <hr />
            <br />
            <h3>Innerwear & Sleepwear</h3>
            <h4>Briefs & Trunks</h4>
            <h4>Boxers</h4>
            <h4>Vests</h4>
            <h4>Sleepwear & Loungewear</h4>
            <h4>Thermals</h4>
            <br />
            <hr />
            <br />
            <h3>Plus Size</h3>
          </div>
          <div className="thrid">
            <h3> Footwear</h3>
            <h4>Casual Shoes</h4>
            <h4>Sports Shoes</h4>
            <h4>Formal Shoes</h4>
            <h4>Sneakers</h4>
            <h4>Sandals & Floaters</h4>
            <h4>Flip Flops</h4>
            <h4>Socks</h4>
            <br />
            <hr />
            <br />
            <h3>Personal Care & Grooming</h3>
            <h3>Sunglasses & Frames</h3>
            <h3>Watches</h3>
          </div>
          <div className="fourth">
            <h3>Sports & Active Wear</h3>
            <h4>Sports Shoes</h4>
            <h4>Sports Sandals</h4>
            <h4>Active T-Shirts</h4>
            <h4>Track Pants & Shorts</h4>
            <h4>Tracksuits</h4>
            <h4>Jackets & Sweatshirts</h4>
            <h4>Sports Accessories</h4>
            <h4>Swimwear</h4>
            <br />
            <hr />
            <br />
            <h3> Gadgets</h3>
            <h4>Smart Wearables</h4>
            <h4>Fitness Gadgets</h4>
            <h4>Fitness Gadgets</h4>
            <h4>Headphones</h4>
            <h4>Speakers</h4>
          </div>
          <div className="fivth">
            <h3>Fashion Accessories</h3>
            <h4>Wallets</h4>
            <h4>Belts</h4>
            <h4>Perfumes & Body Mists</h4>
            <h4>Trimmers</h4>
            <h4>Deodorants</h4>
            <h4>Ties, Cufflinks & Pocket Squares</h4>
            <h4>Accessory Gift Sets</h4>
            <h4>Caps & Hats</h4>
            <h4>Mufflers, Scarves & Gloves</h4>
            <h4>Phone Cases</h4>
            <h4>Rings & Wristwear</h4>
            <h4>Helmets</h4>

            <br />
            <hr />
            <br />
            <h3> Bags & Backpacks</h3>
            <h3>Luggages & Trolleys</h3>
          </div>
        </div>
        <div className="living" style={{ display: living }}>
          <div className="first">
            <h3>Topwear</h3>
            <h4>T-Shirts</h4>
            <h4>Casual Shirts</h4>
            <h4>Formal Shirts</h4>
            <h4>Sweatshirts</h4>
            <h4>Sweaters</h4>
            <h4>Jackets</h4>
            <h4>Blazers & Coats</h4>
            <h4>Suits</h4>

            <h4>Rain Jackets</h4>
            <br />
            <hr />
            <br />
            <h3>Indian & Festive Wear</h3>
            <h4>Kurtas & Kurta Sets</h4>
            <h4>Sherwanis</h4>
            <h4>Nehru Jackets</h4>
            <h4>Dhotis</h4>
          </div>
          <div className="second">
            <h3>Bottomwear</h3>
            <h4>Jeans</h4>
            <h4>Casual Trousers</h4>
            <h4>Formal Trousers </h4>
            <h4>Shorts Track</h4>
            <h4>Pants & Joggers</h4>
            <br />
            <hr />
            <br />
            <h3>Innerwear & Sleepwear</h3>
            <h4>Briefs & Trunks</h4>
            <h4>Boxers</h4>
            <h4>Vests</h4>
            <h4>Sleepwear & Loungewear</h4>
            <h4>Thermals</h4>
            <br />
            <hr />
            <br />
            <h3>Plus Size</h3>
          </div>
          <div className="thrid">
            <h3> Footwear</h3>
            <h4>Casual Shoes</h4>
            <h4>Sports Shoes</h4>
            <h4>Formal Shoes</h4>
            <h4>Sneakers</h4>
            <h4>Sandals & Floaters</h4>
            <h4>Flip Flops</h4>
            <h4>Socks</h4>
            <br />
            <hr />
            <br />
            <h3>Personal Care & Grooming</h3>
            <h3>Sunglasses & Frames</h3>
            <h3>Watches</h3>
          </div>
          <div className="fourth">
            <h3>Sports & Active Wear</h3>
            <h4>Sports Shoes</h4>
            <h4>Sports Sandals</h4>
            <h4>Active T-Shirts</h4>
            <h4>Track Pants & Shorts</h4>
            <h4>Tracksuits</h4>
            <h4>Jackets & Sweatshirts</h4>
            <h4>Sports Accessories</h4>
            <h4>Swimwear</h4>
            <br />
            <hr />
            <br />
            <h3> Gadgets</h3>
            <h4>Smart Wearables</h4>
            <h4>Fitness Gadgets</h4>
            <h4>Fitness Gadgets</h4>
            <h4>Headphones</h4>
            <h4>Speakers</h4>
          </div>
          <div className="fivth">
            <h3>Fashion Accessories</h3>
            <h4>Wallets</h4>
            <h4>Belts</h4>
            <h4>Perfumes & Body Mists</h4>
            <h4>Trimmers</h4>
            <h4>Deodorants</h4>
            <h4>Ties, Cufflinks & Pocket Squares</h4>
            <h4>Accessory Gift Sets</h4>
            <h4>Caps & Hats</h4>
            <h4>Mufflers, Scarves & Gloves</h4>
            <h4>Phone Cases</h4>
            <h4>Rings & Wristwear</h4>
            <h4>Helmets</h4>

            <br />
            <hr />
            <br />
            <h3> Bags & Backpacks</h3>
            <h3>Luggages & Trolleys</h3>
          </div>
        </div>

        <div className="beauty" style={{ display: beauty }}>
          <div className="second">
            <h3>Bottomwear</h3>
            <h4>Jeans</h4>
            <h4>Casual Trousers</h4>
            <h4>Formal Trousers </h4>
            <h4>Shorts Track</h4>
            <h4>Pants & Joggers</h4>
            <br />
            <hr />
            <br />
            <h3>Innerwear & Sleepwear</h3>
            <h4>Briefs & Trunks</h4>
            <h4>Boxers</h4>
            <h4>Vests</h4>
            <h4>Sleepwear & Loungewear</h4>
            <h4>Thermals</h4>
            <br />
            <hr />
            <br />
            <h3>Plus Size</h3>
          </div>
          <div className="thrid">
            <h3> Footwear</h3>
            <h4>Casual Shoes</h4>
            <h4>Sports Shoes</h4>
            <h4>Formal Shoes</h4>
            <h4>Sneakers</h4>
            <h4>Sandals & Floaters</h4>
            <h4>Flip Flops</h4>
            <h4>Socks</h4>
            <br />
            <hr />
            <br />
            <h3>Personal Care & Grooming</h3>
            <h3>Sunglasses & Frames</h3>
            <h3>Watches</h3>
          </div>
        </div>
        <div className="store" style={{ display: store }}>
          <img
            src=" https://th.bing.com/th/id/R.4b8a2cfa627fccbf2c7aafa2de5150f7?rik=vUzPGc4lIIEknw&riu=http%3a%2f%2fbusinessnewsthisweek.com%2fwp-content%2fuploads%2f2021%2f03%2fMain-Banner.jpg&ehk=bPXR5Z5d4PP4I4QXr7K6dceTnpQqZgSzCMhIj1X1Mbw%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>

        <div className="wishlist" style={{ display: wishList }}>
          <div className="product">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/b504644b-f446-48c9-b928-36f1958bd19a1691142484406-image_png_292913761.png"
              alt=""
            />
            <h4>Bikes & Car</h4>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="bag" style={{ display: bag }}>
          <div className="product">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/3/a06120fd-caa3-4dac-93c3-3d4d574f8d7c1691087170219-image_png_116457033.png"
              alt=""
            />
            <h4>T-Sherts</h4>
            <button>Buy Now</button>
          </div>
          <div className="product">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png"
              alt=""
            />
            <h4>Sharees</h4>
            <button>Buy Now</button>
          </div>
          <div className="product">
            <img
              src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png"
              alt=""
            />
            <h4>Make-Up</h4>
            <button>Buy Now</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
