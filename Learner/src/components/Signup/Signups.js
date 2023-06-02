import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import  './signup.css'
import signupImg from '../../assests/images/signup.jpg'

const Signups = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ name: "", email: "", password: "" });
  const onclickHandle = async (e) => {
    e.preventDefault(); //will not reload the page
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cred.name,
        email: cred.email,
        password: cred.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("access", json.success);
      navigate("/");
    }
  };
  const onchange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="login-section">
        <div className="container">
          <div className="row login-row">
            <div className="signup-image col-lg-6 col-md-6 col-sm-12 col-12">
              <img src={signupImg} alt="" className="w-100" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 form-section">
              <form onSubmit={onclickHandle}>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    className="form-control"
                    id="exampleInputName"
                    value={cred.name}
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={cred.email}
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={cred.password}
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ConfirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputConfirmPassword1"
                  />
                </div>
                <div className="text-center submit-btn">
                  <button type="submit" className="btn btn-success mb-2">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signups;
