import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import airLine from "./Images/airLine.jpg";
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

function AdminLogin() {
  const navigate = useNavigate();
  const API_BASE_URL = "http://localhost:5275/api/Users/admin/login";

  const [formData, setFormData] = useState({
    username: "",

    password: "",
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
      .post(API_BASE_URL, null, {
        params: {
          username: formData.username,
          password: formData.password,
        },
      })
      .then((response) => {
        if (response.data && response.data.role === "admin") {
          toast.success("Admin logged in successfully.");
          navigate("/dashboard");
        } else {
          toast.error("Invalid credentials or not an admin user.");
        }
      })
      .catch((error) => {
        toast.error("Error logging in:", error);
      });
  };

  return (
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
                            <label class="form-label">user Name</label>
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

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" class="btn btn-primary btn-lg">
                            Login
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
  );
}

export default AdminLogin;
