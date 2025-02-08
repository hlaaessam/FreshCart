import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsCartContext } from "../../Context/ProductsCartContext";

export default function Product({ product }) {
  let { addToCart } = useContext(ProductsCartContext);

  async function addProductToCart(id) {
    // console.log(id);

    // let response =
    await addToCart(id);

    // console.log(response);

    // if (response.status === 201) {
    //   toast.success("Prodect Successfully Added", {
    //     duration: 3000,
    //   });
    // } else {
    //   toast.error("Error To Adding! Try Again!");
    // }
  }

  return (
    <>
      <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-2 ">
        <div className="product cursor-pointer rounded-3 p-3 my-4">
          <Link to={`/productdetails/${product._id}`}>
            <img src={product.imageCover} className="w-100" alt="img" />
            <span className="text-main"> {product.category.name}</span>
            <h6 className="my-2 fw-bold">
              {" "}
              {product.title.split(" ").slice(0, 2).join(" ")}
            </h6>

            <div className="d-flex justify-content-between my-3">
              <div>{product.price}EGP</div>
              <div>
                <i className="fa-solid fa-star rating-color "></i>
                {product.ratingsAverage}
              </div>
            </div>
          </Link>

          <button
            onClick={() => addProductToCart(product._id)}
            className="btn bg-main rounded w-100 text-white "
          >
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
