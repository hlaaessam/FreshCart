import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Brands from "./Components/Brands/Brands.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Login from "./Components/Login/Login.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import Products from "./Components/Products/Products.jsx";
import Register from "./Components/Register/Register.jsx";
import ProductsCartContextProvider from "./Context/ProductsCartContext.js";
import { useContext, useEffect } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import { Toaster } from "react-hot-toast";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";
import Address from "./Components/Address/Address.jsx";
import AddressContextProvider from "./Context/AddressContext.js";
import ConfirmOrderDetails from "./Components/ConfirmOrderDetails/ConfirmOrderDetails.jsx";
import { UserContext } from "./Context/UserContext.js";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            {" "}
            <Home />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            {" "}
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "/categories",
        element: (
          <ProtectedRoute>
            {" "}
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "/brands",
        element: (
          <ProtectedRoute>
            {" "}
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            {" "}
            <Cart />
          </ProtectedRoute>
        ),
      },

      {
        path: "/address",
        element: (
          <ProtectedRoute>
            {" "}
            <Address />
          </ProtectedRoute>
        ),
      },

      {
        path: "/orderDetails",
        element: (
          <ProtectedRoute>
            {" "}
            <ConfirmOrderDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            {" "}
            <UserProfile />
          </ProtectedRoute>
        ),
      },

      {
        path: "/productdetails/:id",
        element: (
          <ProtectedRoute>
            {" "}
            <ProductDetails />
          </ProtectedRoute>
        ),
      },

      { path: "/*", element: <NotFound /> },
      // { path: "/about", element: <About /> },
    ],
  },
  // {
  //   future: {
  //     v7_normalizeFormMethod: true,
  //     v7_preventScrollReset: true,
  //     v7_startTransition: true, // Opt-in for `startTransition` in React Router v7
  //   },
  // },
]);

function App() {
  let { setUserToken } = useContext(UserContext);
  // if the user make refersh . el data htboz l2n hyrg3 el usertoken = null bsbb el context,  lazm n3rf el app an user mwgod w 3aml login awal myft7
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setUserToken(localStorage.userToken);
    }
  }, []);

  return (
    <>
      <ProductsCartContextProvider>
        <AddressContextProvider>
          <RouterProvider router={routers}></RouterProvider>
          <Toaster />
        </AddressContextProvider>
      </ProductsCartContextProvider>
    </>
  );
}

export default App;
