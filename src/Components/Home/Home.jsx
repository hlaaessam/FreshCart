import React, { useContext } from "react";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import MainSlider from "../MainSlider/MainSlider";
import { Helmet } from "react-helmet";
import Loading from "../Loading/Loading";

export default function Home() {
  return (
    <>
      <div className="container">
        <MainSlider />
        <Categories />
        <Products />

        <Helmet>
          <meta charSet="utf-8" />
          <title>Frech Cart Home</title>
          {/* <link rel="" href="" /> */}
        </Helmet>
      </div>
    </>
  );
}
