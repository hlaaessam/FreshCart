import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { Helmet } from "react-helmet";

export default function Login() {
  let [loading, setLoading] = useState(false);
  let [errorMess, seterrorMess] = useState("");
  let navigate = useNavigate();

  let { setUserToken, setUserData } = useContext(UserContext);

  async function loginSubmit(values) {
    setLoading(true);

    let res = await axios.get("http://localhost:3000/users");
    let user = res.data.filter(
      (obj) => obj.email === values.email && obj.password === values.password
    );

    //anthor way
    if (user.length !== 0) {
      // Save the token in localStorage
      localStorage.setItem("userToken", user[0].token);
      setUserToken(localStorage.userToken);

      formik.resetForm();
      navigate("/");
    } else {
      seterrorMess("Account Not Exits");
    }

    setLoading(false);
  }

  let validationSchema = Yup.object({
    email: Yup.string().email("email invaild").required("email is requird"),
    password: Yup.string().required("password is requird"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: loginSubmit,
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign In</title>
        {/* <link rel="" href="" /> */}
      </Helmet>
      <div className="w-75 m-auto py-4">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email" className="py-1">
            {" "}
            Email:
          </label>
          <input
            className="form-control mb-2"
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.errors.email && formik.touched.email ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {formik.errors.email}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="password" className="py-1">
            {" "}
            Password:
          </label>
          <input
            className="form-control mb-2"
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.errors.password && formik.touched.password ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}

          {errorMess && formik.touched.email ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {" "}
              {/* errors bbt7t feh errors form / bbt7t mn yup aw bn7tha manual zay f validat */}
              {errorMess}
            </div>
          ) : (
            ""
          )}

          <button
            disabled={!(formik.isValid && formik.dirty)}
            className="btn bg-main text-white mt-2 w-100"
            type="submit"
          >
            {loading ? <i className="fa fa-spinner fa-spin"></i> : "Sign In"}
          </button>
        </form>
      </div>
    </>
  );
}
