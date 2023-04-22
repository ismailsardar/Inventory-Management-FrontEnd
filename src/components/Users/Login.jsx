import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h3>SIGN IN</h3>
                <br />
                <input
                  //   ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className="form-control"
                  type="email"
                />
                <br />
                <input
                  //   ref={(input) => (passRef = input)}
                  placeholder="User Password"
                  className="form-control"
                  type="password"
                />
                <br />
                <button
                  //   onClick={SubmitLogin}
                  className="btn btn-success w-100 animated "
                >
                  Next
                </button>
                <div className="float-end mt-3">
                  <span>
                    <Link className="text-center ms-3 h6" to="/registration">
                      Sign Up
                    </Link>
                    <span className="ms-1">|</span>
                    <Link className="text-center ms-3 h6" to="/SendOTP">
                      Forget Password
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
