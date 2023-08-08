import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./Toast";
import Styles from "./SignUp.module.css";
import {Link} from 'react-router-dom';

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccept: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});


  useEffect(() => {
    setErrors(validate(data , "signup"));
  }, [data, touched]);



  const changeHandler = (event) => {
    if (event.target.name == "isAccept") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };




  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };




  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("you sign successfully", "success");
    } else {
      notify("Invalid data", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccept: true,
      });
    }
  };



  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler}>
        <h2>SignUp</h2>
        <div className={Styles.formfield}>
          <label>Name</label>
          <input  type="text"   name="name"  value={data.name}  onChange={changeHandler} onFocus={focusHandler}></input>
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className={Styles.formfield}>
          <label>Email</label>
          <input  type="text"  name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler} ></input>
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={Styles.formfield}>
          <label>Password</label>
          <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler} ></input>
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={Styles.formfield}>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}></input>
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={Styles.accept}>
          <label>I Accept Privacy Terms Of Policy</label>
          <input type="checkbox" name="isAccept" value={data.isAccept} onChange={changeHandler} onFocus={focusHandler}></input>
          {errors.isAccept && touched.isAccept && (
            <span>{errors.isAccept}</span>
          )}
        </div>
        <div className={Styles.submit}>
          <Link to="/login">Login</Link >
          <button className={Styles.butsub} type="submit">SignUp</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
