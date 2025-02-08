import React from "react";
import imglogo from "../../Assets/Image/freshcart-logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bottom[0px]">
        <div className=" bg-body-tertiary d-flex flex-row rounded-top-4 p-4 container-fluid mt-5 pb-5 shadow-sm text-left   ">
          <div className=" me-auto">
            <Link className="nav-link active" aria-current="page" to="/">
              <img src={imglogo} alt="Logo" />
            </Link>
          </div>

          <div className="d-flex flex-row  text-body-secondary   ">
            <div className="d-flex flex-column  mx-4">
              <h6 className="fw-bold text-dark">Products</h6>
              <span className="font-size mt-1">Tshirt</span>
              <span className="font-size mt-1">Jackets</span>
              <span className="font-size mt-1">Shoes</span>
              <span className="font-size mt-1">laptop</span>
              <span className="font-size mt-1">Headphone</span>
            </div>
            <div className="d-flex flex-column mx-4 ">
              <h6 className="fw-bold text-dark">Categories</h6>
              <span className="font-size mt-1">Women</span>
              <span className="font-size mt-1">Men</span>
              <span className="font-size mt-1">Kids</span>
              <span className="font-size mt-1">Gift</span>
              <span className="font-size mt-1"> Electronics</span>
            </div>
            <div className="d-flex flex-column mx-4 ">
              <h6 className="fw-bold text-dark">Brands</h6>
              <span className="font-size mt-1">DeFacto</span>
              <span className="font-size mt-1">LC Waikiki</span>
              <span className="font-size mt-1">PIXI</span>
              <span className="font-size mt-1">Dejavu</span>
            </div>
            <div className="d-flex flex-column mx-4 cursor-pointer ">
              <h6 className="fw-bold text-dark">Social Mediea</h6>
              <span className="font-size mt-1">instagram</span>
              <span className="font-size mt-1">Facebook</span>
              <span className="font-size mt-1">Twitter</span>
              <span className="font-size mt-1">TikTok</span>
            </div>
          </div>
        </div>

        <div className="bg-dark text-white d-flex flex-row px-4 py-2 container-fluid text-left shadow-sm">
          <div className="me-auto">
            <h6 className="fw-semibold font-size ">
              <span>&copy;</span>2024 Frech Cart
            </h6>
          </div>
          <div className=" d-flex flex-row text-left  ">
            <h6 className="mx-4 font-size fw-semibold">Terms & Conditions</h6>
            <h6 className="mx-4 font-size fw-semibold">Privacy Policy</h6>
            <h6 className="mx-4 font-size fw-semibold">Cookie Policy</h6>
          </div>
        </div>
      </div>
    </>
  );
}
