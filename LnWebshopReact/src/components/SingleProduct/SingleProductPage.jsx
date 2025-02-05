import React, { useContext, useState, memo } from "react";
import config from '../../config.json'
import { useParams } from "react-router-dom";
import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";
import useData from "../../hooks/useData";
import Loader from "../common/Loader";
import cartContext from "../../contexts/CartContext";
import userContext from "../../contexts/UserContext";

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data: product, error, loading } = useData(`/products/${id}`, null, ["products", id], );
  const { addToCart } = useContext(cartContext);
  const user = useContext(userContext);

  return (
    <section className="align_center single_product">
      {error && <em className="form_error">{error.message}</em>}
      {loading && <Loader />}
      {Object.entries(product).length > 0 && (
        <>
          <div className="align_center">
            <div className="single_product_thumbnails">
              {product.images?.map((image, index) => (
                <img
                  className={selectedImage === index ? "selected_image" : ""}
                  onClick={() => setSelectedImage(index)}
                  src={`${config.backendURL}/products/${image}`}
                  alt={product.title}
                />
              ))}
            </div>
            <img
              src={`${config.backendURL}/products/${product.images[selectedImage]}`}
              alt={product.title}
              className="single_product_display"
            />
          </div>
          <div className=" single_product_details">
            <h2 className="single_product_title">{product.title}</h2>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">${product.price?.toFixed(2)}</p>
            { user && <>
              <h2 className="quantity_title">Quantity:</h2>
              <QuantityInput
                quantity={quantity}
                setQuantity={setQuantity}
                stock={product.stock}
              />
            </>}
            {user && (
              <button
                className="search_button add_cart_button"
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default memo(SingleProductPage);
