import React, { useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { ProductsCartContext } from "../../Context/ProductsCartContext";

export default function ProductDetails() {
  let { addToCart } = useContext(ProductsCartContext);
  let { id } = useParams();

  var settings = {
    dots: false,
    infinite: true,
    // speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  function getProductDetails(productId) {
    return axios.get(`http://localhost:3000/products/${productId}`);
  }

  let { data } = useQuery("productDetails", () => getProductDetails(id));
  // console.log(data?.data);
  let productDetails = data?.data;

  async function addProductToCart(id) {
    await addToCart(id);
  }

  return (
    <>
      {
        <Helmet>
          <meta charSet="utf-8" />
          <title>{productDetails?.title}</title>
          {/* <link rel="" href="" /> */}
        </Helmet>
      }
      {productDetails ? (
        <div className="row py-3 align-items-center">
          <div className="col-md-4 ">
            <Slider {...settings}>
              {productDetails.images.map((img, key) => (
                <div key={key}>
                  <img className="w-100 " src={img} alt="img" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-8 ">
            <h2 className="pb-3">{productDetails.title}</h2>
            <p className="fs-6">{productDetails.description}</p>

            <h6 className="text-main">{productDetails.category.name}</h6>
            <div className="d-flex justify-content-between">
              <h6>Price: {productDetails.price} EGP</h6>
              <div className="d-flex align-items-center">
                <i className="fas fa-star rating-color mx-1"></i>
                <span> {productDetails.ratingsAverage}</span>
              </div>
            </div>

            <button
              onClick={() => addProductToCart(productDetails.id)}
              className="btn bg-main text-white w-100 mt-2"
            >
              {" "}
              Add To Cart
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
