import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import oppsImg from "../../Assets/Image/notfound-removebg-preview.png";

export default function NotFound() {
  const navigate = useNavigate(); // To handle navigation
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found Page</title>
        {/* <link rel="" href="" /> */}
      </Helmet>

      <div className="text-center p-4">
        <img src={oppsImg} alt="Oops" className="w-full max-w-md mb-4" />
        <h1 className="text-4xl font-bold mb-4 ">404 - PAGE NOT FOUND</h1>
        <p className=" mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <button
          onClick={() => navigate("/")}
          className="btn bg-main rounded text-white  "
        >
          Go Back
        </button>
      </div>
    </>
  );
}
