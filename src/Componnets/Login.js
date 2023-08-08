import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./Toast";
import Styles from "./SignUp.module.css";
import { Link } from "react-router-dom";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data , "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });  
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("you loged successfully", "success");
    } else {
      notify("Invalid data", "error");
      setTouched({
       
        email: true,
        password: true,
       
      });
    }
  };

  return (
    <div className={Styles.container}>
      <form onSubmit={submitHandler}>
        <h2>Login</h2>

        <div className={Styles.formfield}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={Styles.formfield}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          ></input>
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className={Styles.submit}>
          <Link to='/signup'>SignUp</Link>
          <button className={Styles.butsub} type="submit">
            Login
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Login;
