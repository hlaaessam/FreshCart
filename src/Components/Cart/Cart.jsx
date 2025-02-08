import React, { useContext, useEffect, useState } from "react";
import { ProductsCartContext } from "../../Context/ProductsCartContext";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Cart() {
  let {
    getLoggedUserCart,
    deleteCartProduct,
    updateCartProduct,
    totalPrice,
    totalItemsCart,
  } = useContext(ProductsCartContext);

  let [userProducts, setUserProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  async function getUserProductsCart() {
    let response = await getLoggedUserCart();
    // console.log(response);

    setUserProducts(response);
    setLoading(false);
  }

  async function removeCartProduct(id) {
    setLoading(true);
    await deleteCartProduct(id);
    getUserProductsCart();
    setLoading(false);
  }

  async function updateProductCount(id, countt) {
    setLoading(true);

    await updateCartProduct(id, countt);
    getUserProductsCart();
    setLoading(false);
  }

  function decreaseCounter(count) {
    if (count !== 1) {
      return count - 1;
    } else {
      toast.error("cannot reduce the quantity below one");
    }
  }

  useEffect(() => {
    getUserProductsCart();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shopping Cart</title>
        {/* <link rel="" href="" /> */}
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <div className=" container w-md-75 bg-main-light m-auto rounded p-3 my-5 ">
          <h1>Shopping Cart</h1>

          {userProducts.length !== 0 ? (
            <>
              <h6 className="  text-main  ">Cart Items :{totalItemsCart}</h6>

              <h6 className="text-main  mb-4">
                Total Cart Price :{totalPrice}{" "}
              </h6>

              {userProducts.map((item, key) => (
                <div className=" row  border-bottom py-2" key={key}>
                  <div className="col-md-1">
                    <img
                      className="w-100 rounded mb-sm-2"
                      src={item.product.imageCover}
                      alt="img"
                    />
                  </div>

                  <div className="col-md-11">
                    <div className="d-flex justify-content-between mtop mt-sm-1 ">
                      <div>
                        <h6>
                          {" "}
                          {item.product.title.split(" ").slice(0, 2).join(" ")}
                        </h6>
                        <h6 className="text-main font-sm">
                          Price :{item.product.price}
                        </h6>
                      </div>

                      <div>
                        <button
                          onClick={() =>
                            updateProductCount(item.id, item.count + 1)
                          }
                          className="btn bordr-main p-1"
                        >
                          +
                        </button>
                        <span className="mx-2">{item.count}</span>
                        <button
                          onClick={() =>
                            updateProductCount(
                              item.id,
                              decreaseCounter(item.count)
                            )
                          }
                          className="btn bordr-main p-1"
                        >
                          -
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeCartProduct(item.id)}
                      className="btn p-0 fontt-sm"
                    >
                      <i className="fas fa-trash-can text-danger "></i> Remove
                    </button>
                  </div>
                </div>
              ))}

              <Link
                to={"/address"}
                className="w-100 btn bg-main text-white mt-3"
              >
                {" "}
                Cash on Delivery
              </Link>
            </>
          ) : (
            <h6 className="text-danger py-3"> No Products Added</h6>
          )}
        </div>
      )}
    </>
  );
}
