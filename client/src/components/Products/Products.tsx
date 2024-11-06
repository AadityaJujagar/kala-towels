import Beach from "../../../public/assets/products carousel/b.jpg";
import Dobby from "../../../public/assets/products carousel/d.jpg";
import Hotel from "../../../public/assets/products carousel/h.jpg";
import Jacquartd from "../../../public/assets/products carousel/j.jpg";
import Kitchen from "../../../public/assets/products carousel/k.jpg";
import Napkins from "../../../public/assets/products carousel/n.jpg";
import Pool from "../../../public/assets/products carousel/p.jpg";
import Velour from "../../../public/assets/products carousel/v.jpg";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./products.css";

export const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <div className="productsContainer">
        <div className="productsGrid">
          <div className="all">
            <ProductCarousel />
          </div>
          <div className="product p1">
            <img src={Hotel} alt="" />
            <p>HOTEL TOWELS</p>
            <button className="order-button">Order Now</button>
          </div>
          <div className="product p2">
            <img src={Beach} alt="" />
            <p>BEACH TOWELS</p>
            <button className="order-button">Order Now</button>
          </div>
          <div className="product p3">
            <img src={Kitchen} alt="" />
            <p>KITCHEN TOWELS</p>
            <button className="order-button">Order Now</button>
          </div>
          <div className="product p4">
            <img src={Dobby} alt="" />
            <p>DOBBY TOWELS</p>
            <button className="order-button">Order Now</button>
          </div>
          <div className="product p5">
            <img src={Jacquartd} alt="" />
            <p>JACQUARTD TOWELS</p>
            <button className="order-button">Order Now</button>
          </div>
          <div className="product p6">
            <img src={Velour} alt="" />
            <p>VELOUR TOWELS</p>
            <button className="order-button">Order Now</button>
          </div>
          <div className="product p7">
            <img src={Pool} alt="" />
            <p>POOL TOWELS</p>
            <button className="order-button">Order Now</button>
          </div>
          <div className="product p8">
            <img src={Napkins} alt="" />
            <p>NAPKINS</p>
            <button className="order-button">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
