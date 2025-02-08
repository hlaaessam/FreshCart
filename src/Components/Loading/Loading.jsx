import React from "react";
import Style from "./Loading.module.css";

export default function Loading() {
  return (
    <>
      {/* <div className="position-relative"> */}
      <div className={Style.spinner}></div>
      {/* </div> */}
    </>
  );
}
