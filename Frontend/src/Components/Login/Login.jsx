import React, { useState } from "react";
import "./Login.css";
import logo1 from "../../Assets/logo.jpg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = async (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/auth", {
        email,
        password,
      });

      if (response.data.success) {
        console.log("Login successful : ", response.data);
      } else {
        console.log("Login error : ", response.data.message);
      }
    } catch (error) {
      console.log("Login error : ", error);
    }
  };
  return (
    <div>
      <div class="background"></div>

      <div class="content">
        <div class="container-1">
          <br />
          <br />
          <div class="box">
            <div class="header">
              <div class="text">
                <h1> Local concepts with a</h1>
                <h1> Global reach</h1>
              </div>
              <div class="logo1">
                <img src={logo1} className="logo2" alt="logo1"></img>
              </div>
            </div>
            <div class="form">
              <div class="item">
                <form onSubmit={this.handleSubmit}>
                  <label class="tittle">
                    Email
                    <br />
                    <input
                      class="form-login"
                      type="email"
                      placeholder="Insert Email"
                      value={this.state.value}
                      onChange={this.handleChangeEmail}
                    />
                  </label>
                  <br />

                  <label class="tittle">
                    Password
                    <br />
                    <input
                      class="form-login"
                      type="Password"
                      placeholder="Insert Password"
                      value={this.state.value}
                      onChange={this.handleChangePass}
                    />
                  </label>
                  <div class="col-sm-10 offset-2">
                    <input type="checkbox" class="form-check-input" /> Tampilkan
                    Password
                  </div>
                  <br />
                  <input class="submit-btn" type="submit" value="Login" />
                </form>
                <br />
                <div>
                  Belum memiliki akun?{" "}
                  <a href="#" class="text-decoration-none">
                    {" "}
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Login;
