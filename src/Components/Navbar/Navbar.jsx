import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import imglogo from "../../Assets/Image/freshcart-logo.svg";
import { UserContext } from "../../Context/UserContext";
import { ProductsCartContext } from "../../Context/ProductsCartContext";
export default function Navbar() {
  let { userToken, setUserToken } = useContext(UserContext);
  let navigate = useNavigate();
  let path = useLocation().pathname;

  let { totalItemsCart } = useContext(ProductsCartContext);

  function logOut() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary">
        <div className="container-fluid">
          <Link className="nav-link active" aria-current="page" to="/">
            <img src={imglogo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {userToken !== null ? (
                <>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${path === "/" ? "active" : ""}`}
                      aria-current="page"
                      to="/"
                    >
                      Home
                      {/* {counter} */}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        path === "/products" ? "active" : ""
                      }`}
                      to="/products"
                    >
                      Products
                      {/* {userName} */}
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        path === "/categories" ? "active" : ""
                      }`}
                      to="/categories"
                    >
                      Categories
                    </Link>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        path === "/brands" ? "active" : ""
                      }`}
                      to="/brands"
                    >
                      Brands
                    </Link>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link
                      className={`nav-link ${path === "/cart" ? "active" : ""}`}
                      to="/cart"
                    >
                      Cart
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        path === "/orderDetails" ? "active" : ""
                      }`}
                      to="/orderDetails"
                    >
                      Orders
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex align-items-center">
              {userToken !== null ? (
                <>
                  {/* <li className="nav-item">
                    <Link className={`nav-link`} aria-current="page" to="/cart">
                      <i className="fa-solid fa-cart-shopping fs-5 mx-2 text-light-emphasis"></i>
                    </Link>
                  </li> */}
                  {/* <i class="fa-solid fa-cart-shopping"></i> */}

                  <li className="nav-item mx-3 ">
                    <Link className={`nav-link`} to="/cart">
                      <i className="fa-solid fa-cart-shopping mainColor fs-5 cart">
                        <span className="carts">{totalItemsCart}</span>
                      </i>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <span
                      onClick={() => logOut()}
                      className="nav-span cursor-pointer tcolor"
                    >
                      Logout
                      {/* <i class="fa-solid fa-right-from-bracket mainColor fs-5 "></i> */}
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <i className="fa-brands fa-facebook-f mx-2"></i>
                    <i className="fa-brands fa-twitter mx-2"></i>
                    <i className="fa-brands fa-instagram mx-2"></i>
                    <i className="fa-brands fa-tiktok mx-2"></i>
                    <i className="fa-brands fa-youtube mx-2"></i>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link  ${
                        path === "/login" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        path === "/register" ? "active" : ""
                      }`}
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
