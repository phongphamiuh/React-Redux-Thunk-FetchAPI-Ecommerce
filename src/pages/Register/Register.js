import React from "react";
import { Formik } from "formik";
import {NavLink} from "react-router-dom";

import * as Yup from "yup";
const Register = () => (
  
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Vui lòng nhập Email"),
      password: Yup.string()
        .required("Vui lòng nhập Password.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit} className="formi">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Nhập Email của bạn"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}

          <label htmlFor="email">Password</label>

          <input
            name="password"
            type="password"
            placeholder="Nhập Mật Khẩu của bạn"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Đăng ký
          </button>

          <button type="submit" >
            <NavLink className="nav-link" to={"/register"}>Đăng nhập</NavLink>
          </button>
        </form>
      );
    }}
  </Formik>
);

export default Register;
