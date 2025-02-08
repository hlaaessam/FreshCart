import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export let ProductsCartContext = createContext();

export default function ProductsCartContextProvider(props) {
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalItemsCart, setTotalItemsCart] = useState(0);

  async function addToCart(id) {
    let data = await axios.get(`http://localhost:3000/products/${id}`);
    // .then((response) => console.log(response.data))
    // .catch((err) => err);

    let res = await axios.get("http://localhost:3000/productsCart");
    console.log(res.data);

    let productItem = await res.data.filter((item) => item.product.id === id);
    console.log("productItem", productItem);
    let productId = productItem[0]?.product.id;
    // console.log();

    if (!productId) {
      await axios({
        method: "post",
        url: "http://localhost:3000/productsCart",
        data: {
          token: localStorage.getItem("userToken"),
          //   productId:id,
          product: data.data,
          count: 1,
        },
      });

      toast.success("Prodect Successfully Added", {
        duration: 1000,
      });
    } else {
      let count = productItem[0]?.count + 1;
      let itemId = productItem[0]?.id;

      updateCartProduct(itemId, count);

      toast.success("Prodect increased Successfully ", {
        duration: 1000,
      });
    }

    // .then((res) => res)
    // .catch((error) => error);
  }

  let allUserCartProducts;

  async function getLoggedUserCart() {
    let response = await axios.get("http://localhost:3000/productsCart");
    allUserCartProducts = response.data.filter(
      (product) => product.token === localStorage.userToken
    );

    if (allUserCartProducts.length !== 0) {
      calculateTotalPriceAndCount();
      return allUserCartProducts;
    } else {
      toast.error("No products exist");

      console.log("ay 7aga");
      return [];
    }
  }

  function calculateTotalPriceAndCount() {
    let prices = allUserCartProducts.map(
      (item) => item.product.price * item.count
    );
    prices = prices.reduce((fisrt, second) => fisrt + second);
    setTotalPrice(prices);

    let count = allUserCartProducts.map((item) => item.count);
    count = count.reduce((fisrt, second) => fisrt + second);
    setTotalItemsCart(count);
  }

  function deleteCartProduct(id) {
    return axios
      .delete(`http://localhost:3000/productsCart/${id}`)
      .then((res) => res)
      .catch((error) => error);
  }

  function updateCartProduct(id, count) {
    return axios
      .patch(`http://localhost:3000/productsCart/${id}`, {
        count,
      })
      .then((res) => res)
      .catch((error) => error);
  }

  return (
    <ProductsCartContext.Provider
      value={{
        addToCart,
        getLoggedUserCart,
        deleteCartProduct,
        updateCartProduct,
        totalPrice,
        totalItemsCart,
      }}
    >
      {props.children}
    </ProductsCartContext.Provider>
  );
}
