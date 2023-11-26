import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import airLine from "./Images/signUp.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faKey,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function AdminSignUp() {
  const API_BASE_URL = "http://localhost:5275/api/users";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "admin",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API_BASE_URL, formData)
      .then((response) => {
        toast.success("User registered successfully");
        console.log("User registered successfully:", response.data);
        setFormData(response.data);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Error registering user:", error);
        console.error("Error registering user:", error);
      });
  };

  return (
    <Layout>
      <>
        <ToastContainer />
        <section class="vh-100" style={{ backgroundColor: "#eee" }}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ borderRadius: "40px" }}>
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>

                        <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <FontAwesomeIcon
                              icon={faUser}
                              className="fa-lg me-2 fa-fw"
                              style={{ marginBottom: "-27px" }}
                            />
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label">Name</label>
                              <input
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                class="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <FontAwesomeIcon
                              icon={faUser}
                              className="fa-lg me-2 fa-fw"
                              style={{ marginBottom: "-27px" }}
                            />
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label">Username</label>
                              <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                class="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className="fa-lg me-3 fa-fw"
                              style={{ marginBottom: "-27px" }}
                            />
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label">Email</label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                class="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <FontAwesomeIcon
                              icon={faLock}
                              className="fa-lg me-3 fa-fw"
                              style={{ marginBottom: "-27px" }}
                            />
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label">Password</label>
                              <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                class="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <FontAwesomeIcon
                              icon={faKey}
                              className="fa-lg me-3 fa-fw"
                              style={{ marginBottom: "-27px" }}
                            />
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label">Confirm Password</label>
                              <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                class="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <FontAwesomeIcon
                              icon={faFaceSmile}
                              className="fa-lg me-3 fa-fw"
                              style={{ marginBottom: "-27px" }}
                            />
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label">Role</label>
                              <input
                              type="text"
                              name="role"
                              value={formData.role}
                              onChange={handleChange}
                              class="form-control"
                              disabled
                            />
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg">
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src={airLine}
                          alt="Image1"
                          style={{ width: "524px", height: "340px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}

export default AdminSignUp;
