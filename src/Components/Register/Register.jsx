import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Register() {
  let [errorMess, seterrorMess] = useState("");
  let [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  // Function to generate a token
  function generateToken() {
    return crypto.randomUUID();
  }

  //values eli gaya mn formik, by default formik send values to submit func... , static name
  async function registerSubmit(values) {
    setLoading(true);
    // console.log(values);

    let res = await axios.get("http://localhost:3000/users");
    let user = res.data.filter((obj) => obj.email === values.email);
    // console.log(user);
    // console.log(res.data);

    // let { data } = await axios.post("http://localhost:3000/users", values);
    // console.log(data);

    //anthor way
    // values.email ==
    if (user.length === 0) {
      // Create a unique token for the new user
      const token = generateToken();

      const userWithToken = { ...values, token, role: "user" };
      console.log(userWithToken);

      await axios
        .post("http://localhost:3000/users", userWithToken)
        .then(({ data }) => {
          console.log("Registered user:", data);
        }); // law feh error byrg3 mn api // bs 3shan mafesh real api to check email is real or depluicate or not this error not apear
      // .catch((err) => {
      //   console.log(err);
      // });

      formik.resetForm();
      setLoading(false);
      navigate("/login");
    } else {
      setLoading(false);
      seterrorMess("Account Already Exits");
    }
  }

  //by default formik send values to validate func
  // function validate(values) {
  //   let errors = {};
  //   let regexPhone =
  //     /^(?:\+?(\d{1,3}))?[-.\s]?(\(?\d{3}\)?)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

  //   let regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   if (!values.name) {
  //     // add property name to obj errors
  //     errors.name = "name requird";
  //   } else if (values.name.length < 3) {
  //     errors.name = "name must be more than 2 letters";
  //   } else if (values.name.length > 10) {
  //     errors.name = "name maxLength is 10";
  //   }

  //   if (!values.phone) {
  //     errors.phone = "phone requird";
  //   } else if (!regexPhone.test(values.phone)) {
  //     errors.phone = "phone is invalid";
  //   }

  //   if (!values.email) {
  //     errors.email = "email requird";
  //   } else if (!regexEmail.test(values.email)) {
  //     errors.email = "email is invalid";
  //   }

  //   if (!values.password) {
  //     errors.password = "password requird";
  //   } else if (values.password.length < 6) {
  //     errors.password = "password minLength is 6";
  //   }

  //   if (!values.rePassword) {
  //     errors.rePassword = "password requird";
  //   } else if (values.rePassword !== values.password) {
  //     errors.rePassword = "not matched password";
  //   }

  //   return errors;
  // }

  //validation using yup
  //use function yup
  let regexPhone =
    /^(?:\+?(\d{1,3}))?[-.\s]?(\(?\d{3}\)?)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

  let validationSchema = Yup.object({
    // min a2l 3add 7rof
    //law kan type number , min m3naha mn el rkam dah lad el max , min =5 , max =20 , mn 5 l 20 rakam
    //min / max  / matches taks two value , first number or regex in matches , second eli hyzhar lwa m7slsh el mtlob
    name: Yup.string()
      .min(3, "name minLength is 3")
      .max(15, "name maxLength is 15")
      .required("name is requird"),
    email: Yup.string().email("invalid email").required("email is requird"),
    phone: Yup.string()
      .matches(regexPhone, "phone invald")
      .required("phone is requird"),
    password: Yup.string()
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "password must be start with uppercase letter and more than 5 letters or numbers"
      )
      .required("password is requird"),

    //oneOf bta5od two value y3ni repassword y match ay value veha bs hena bn5leha tshawr 3ala password
    // mn 5lal reference bta3 password bst5dam ref function
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "not matched password")
      .required("password is requird"),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,

    // validate,

    onSubmit: registerSubmit,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
        {/* <link rel="" href="" /> */}
      </Helmet>
      <div className="w-75 m-auto py-4">
        {" "}
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name" className="py-1">
            Name:
          </label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            name="name"
            id="name"
            type="text"
          />

          {/* ykon feh error w atlms // atktb feh y3ni */}
          {formik.errors.name && formik.touched.name ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {" "}
              {/* errors bbt7t feh errors form / bbt7t mn yup aw bn7tha manual zay f validat */}
              {formik.errors.name}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="email" className="py-1">
            Email:
          </label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
            id="email"
            type="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {" "}
              {formik.errors.email}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="phone" className="py-1">
            Phone:
          </label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            name="phone"
            id="phone"
            type="tel"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {" "}
              {formik.errors.phone}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="password" className="py-1">
            Password:
          </label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            id="password"
            type="password"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {" "}
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="rePassword" className="py-1">
            Confirm Password:
          </label>
          <input
            className="form-control mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            name="rePassword"
            id="rePassword"
            type="password"
          />

          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="bg-danger p-2 rounded text-white my-2">
              {" "}
              {formik.errors.rePassword}
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

          {/* isValid mwgoda f formik bta5od two values y true or false , true lma kol el inputs tb2a vaild
          dirty = y true or false , false lma mkonsh lmst el form / input  / by default false  , true lma nlmsha
          leh 7ten dirty 3shan awal mara bnft7 feha el website bykon el button enable
          w dah 3shan hwa shayf anna mlmsnash el form f 3shan nfhmo anna lmsnaha
          bn2olo mtkonsh dirty(true) k2nna lmsna el form */}
          <button
            disabled={!(formik.isValid && formik.dirty)}
            className="btn bg-main text-white mt-2 w-100"
            type="submit"
          >
            {loading ? <i className="fa fa-spinner fa-spin"></i> : "Sign Up"}
          </button>
        </form>
      </div>
    </>
  );
}
