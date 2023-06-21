import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="bbb-container">
        <div className="login-wrapper">
          <div className="login__title">
            <h2 className="login__title--heading">Login</h2>
          </div>
          <div className="form-container">
            <form className="form">
              <input
                className="form--input"
                type="text"
                placeholder="Your Email"
              />
              <input
                className="form--input"
                type="password"
                placeholder="Your Password"
              />
              <button className="form--submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
