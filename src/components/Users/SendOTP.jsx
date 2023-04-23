import React from "react";
import { useNavigate } from "react-router-dom";

const SendOTP = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90">
              <div className="card-body text-start">
                <h4>EMAIL ADDRESS</h4>
                <hr />
                <label>Your email address</label>
                <input
                  //   ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className="form-control"
                  type="email"
                />
                <br />
                <button
                  /*onClick={VerifyEmail}*/ className="btn w-100 btn-success"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendOTP;
