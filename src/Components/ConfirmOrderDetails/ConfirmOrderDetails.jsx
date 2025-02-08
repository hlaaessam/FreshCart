import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";
import { ProductsCartContext } from "../../Context/ProductsCartContext";

export default function ConfirmOrderDetails() {
  let [loading, setLoading] = useState(false);
  let [userItems, setUserItems] = useState([]);

  let { totalPrice, totalItemsCart, getLoggedUserCart } =
    useContext(ProductsCartContext);

  async function getttt() {
    let response = await getLoggedUserCart();
    setUserItems(response);
  }

  useEffect(() => {
    getttt();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Confirm Order</title>
        {/* <link rel="" href="" /> */}
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <div className="container w-75 bg-main-light m-auto rounded p-3 my-5">
          <h1>Orders</h1>

          {userItems.length !== 0 ? (
            <>
              <h6 className="  text-main  ">Cart Items :{totalItemsCart}</h6>

              <h6 className="text-main  mb-4">
                Total Cart Price :{totalPrice}{" "}
              </h6>

              {userItems?.map((item, key) => (
                <div className=" row  border-bottom py-2" key={key}>
                  <div className="col-md-1">
                    <img
                      className="w-100 rounded"
                      src={item.product.imageCover}
                      alt="img"
                    />
                  </div>

                  <div className="col-md-11">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <h6>
                          {" "}
                          {item.product.title.split(" ").slice(0, 2).join(" ")}
                        </h6>
                        <h6 className="text-main font-sm">
                          Item Count :{item.count}
                        </h6>
                        <h6 className="text-main font-sm">
                          Total Price :{item.product.price * item.count}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <Link to={"/"} className="w-100 btn bg-main text-white mt-3">
              {" "}
              Confirm
            </Link> */}
            </>
          ) : (
            <h6 className="text-danger py-3"> No Orders</h6>
          )}
        </div>
      )}
    </>
  );
}
