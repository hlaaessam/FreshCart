import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import { Offline, Online } from "react-detect-offline";
import useNetwork from "../../Hooks/useNetwork";

export default function Layout() {
  let resOffline = useNetwork();
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>

      {/* <Offline>
        <div className="offline p-2 rounded">
          <i className="fas fa-wifi px-1"></i>
          You're Offline
        </div>
      </Offline> */}

      {resOffline}

      <Footer />
    </>
  );
}
