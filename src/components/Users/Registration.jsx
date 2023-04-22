import React from "react";

const Registration = () => {
    
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-lg-10 center-screen">
          <div className="card w-100">
            <div className="card-body">
              <h4 className="text-start">Sign Up</h4>
              <hr />
              <div className="row m-0 p-0">
                <div className="col-md-4 text-start p-2">
                  <label>Email Address</label>
                  <input
                    // ref={(input) => (emailRef = input)}
                    placeholder="User Email"
                    className="form-control"
                    type="email"
                  />
                </div>
                <div className="col-md-4 text-start p-2">
                  <label>First Name</label>
                  <input
                    // ref={(input) => (firstNameRef = input)}
                    placeholder="First Name"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="col-md-4 text-start p-2">
                  <label>Last Name</label>
                  <input
                    // ref={(input) => (lastNameRef = input)}
                    placeholder="Last Name"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="col-md-4 text-start p-2">
                  <label>Mobile Number</label>
                  <input
                    // ref={(input) => (mobileRef = input)}
                    placeholder="Mobile"
                    className="form-control"
                    type="tel"
                  />
                </div>
                <div className="col-md-4 text-start p-2">
                  <label>Password</label>
                  <input
                    // ref={(input) => (passwordRef = input)}
                    placeholder="User Password"
                    className="form-control"
                    type="password"
                  />
                </div>
              </div>
              <div className="row m-0  p-0">
                <div className="col-md-4 text-start p-2">
                  <button
                    // onClick={onRegistration}
                    className="btn w-100 mt-2 btn-success"
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
