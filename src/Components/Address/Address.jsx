import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AddressContext } from "../../Context/AddressContext";

export default function Address() {
  let { userDetails } = useContext(AddressContext);
  async function handleAdressSubmite(values) {
    // console.log(values);
    await userDetails(values);
  }

  let regexPhone =
    /^(?:\+?(\d{1,3}))?[-.\s]?(\(?\d{3}\)?)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
  let validationSchema = Yup.object({
    address: Yup.string()
      .min(6, "Invalid Address")
      .max(50, "Invalid Address")
      .required("Address is Requird"),
    phone: Yup.string()
      .matches(regexPhone, "Invalid Phone")
      .required("Phone is Requird"),
    city: Yup.string()
      .min(4, "Invalid")
      .max(15, "Invalid")
      .required(" City is Requird "),
  });

  let formik = useFormik({
    initialValues: {
      address: "",
      phone: "",
      city: "",
    },
    validationSchema,

    onSubmit: handleAdressSubmite,
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Confirm Details</title>
        {/* <link rel="" href="" /> */}
      </Helmet>

      <div className="w-75 m-auto py-4 ">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="address" className="py-1">
            Address :
          </label>

          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            name="address"
            id="address"
          />

          {formik.errors.address && formik.touched.address ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {" "}
              {formik.errors.address}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="phone" className="py-1">
            Phone :
          </label>

          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            name="phone"
            id="phone"
          />

          {formik.errors.phone && formik.touched.phone ? (
            <div className="bg-danger text-white rounded my-2 p-2">
              {formik.errors.phone}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="city" className="py-1">
            City :
          </label>

          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            name="city"
            id="city"
          />

          {formik.errors.city && formik.touched.city ? (
            <div className="bg-danger text-white rounded my-2 p-2">
              {formik.errors.city}
            </div>
          ) : (
            ""
          )}

          <Link to={"/orderDetails"} className="text-white">
            <button
              className="w-100 btn bg-main text-white mt-3"
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
            >
              {" "}
              Check out{" "}
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
