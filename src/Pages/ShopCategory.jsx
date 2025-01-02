import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <div className="shopcategory">
        <div className="shopcategory-main-banner">
          <div className="shopcategory-left">
            <p>FLAT 50% OFF</p>
            <h1>
              {" "}
              <span>12</span> Hours <span>20</span> Mins
            </h1>
            <button className="shopcategory-explore-btn">Explore now</button>
          </div>
          <div className="shopcategory-right">
            <img className="shopcategory-banner" src={props.banner} alt="" />
          </div>
        </div>
      </div>

      <div className="shop-category">
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">Explore more</div>
      </div>
    </div>
  );
};

export default ShopCategory;
