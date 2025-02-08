import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";

export default function Products() {
  // let [products, setProducts] = useState([]);
  // let [loading, setLoading] = useState(false);

  // async function getProducts() {
  //   let res = await axios.get(
  //     // "https://ecommerce.routemisr.com/api/v1/products"
  //     "http://localhost:3000/products"
  //   );
  //   console.log(res.data);
  //   setProducts(res.data);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  function getProducts() {
    return axios.get("http://localhost:3000/products");
  }
  //using react query
  let { isError, isLoading, data, refetch } = useQuery(
    "products",
    getProducts,
    {
      cacheTime: 3000,
      // staleTime:2000,
      // refetchInterval: 1000,
      // refetchOnMount: false,
      // bt5li usequery mt3mlsh refetch ll data awal mft7 el web site w btaly a2dr at7km ano my7slsh refetch 8er lma ados 3ala button  , enable by default = true
      // enabled: false,
    }
  );
  //first time when get products . the data is undefined   [console.log(undefined.data);] f bytl3 error
  // to sove this put ? to check if the data is contains the values or not // if containes go ahead if not dont get the data
  // console.log(data?.data);

  return (
    <>
      {/* using normal fetching */}
      {/* {loading ? (
        <Loading />
      ) : (
        <div className=" container my-5 ">
          <div className="row  ">
            {data?.data.map((product, key) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </div>
      )} */}

      {/* useing button to fetch the data */}
      {/* <div className="container my-5">
        <button
          className="btn w-100 mx-auto bg-main text-white "
          onClick={() => refetch()}
        >
          Get Products
        </button>
      </div> */}

      <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
        {/* <link rel="" href="" /> */}
      </Helmet>

      {/* using react query */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" container my-5 ">
          <div className="row">
            {data?.data.map((product, key) => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
