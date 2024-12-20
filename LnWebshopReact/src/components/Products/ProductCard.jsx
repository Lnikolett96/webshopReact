import React from "react";
import './ProductCard.css'
import star from '../../assets/white-star.png'
import basket from '../../assets/basket.png'
import { NavLink } from "react-router-dom";

const ProductCard = ( { id, image, title, price, rating, ratingCount, stock } ) => {
  return (
  <article className="product_card">
    <div className="product_image">
        <NavLink to={`/products/${id}`}><img src={`http://localhost:5000/products/${image}`} alt="Product Image" /></NavLink>
    </div>
    <div className="product_details">
        <h3 className="product_price">${price}</h3>
        <p className="product_title">{title}</p>
        <footer className="align_center product_info_footer">
            <div className="align_center">
                <p className="align_center product_rating"> <img src={star} alt="star" />{rating}</p>
                <p className="product_review_count">{ratingCount}</p>
                { stock > 0 && <button className="add_to_cart">
                    <img src={basket} alt="cart icon" />
                </button>}
            </div>
        </footer>
    </div>
  </article>
)
};

export default ProductCard;
