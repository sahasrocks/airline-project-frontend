import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import airImage from './Images/airhostess.jpg'
import Layout from './Layout';
import Footer from "./Footer";

function Contact() {
  return (
    <Layout>
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-3xl font-extrabold">Get in touch:</h1>
          <p className="text-lg font-medium text-muted mt-2">
            Fill in the form to start a conversation
          </p>

          <div className="mt-4">
            <div className="d-flex align-items-center text-muted">
              <a href="https://globaltechpark.in/">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="fa-lg me-2 fa-fw"
                />
              </a>
              <div className="ml-4 text-md font-semibold w-40">
                Acme Inc, Street, State, Postal Code
              </div>
            </div>

            <div className="d-flex align-items-center mt-2 text-muted">
            <a href="#">
              <FontAwesomeIcon icon={faPhone} className="fa-lg me-2 fa-fw" />
              </a>
              <div className="ml-4 text-md font-semibold w-40">
                +91 9612998983
              </div>
            </div>

            <div className="d-flex align-items-center mt-2 text-muted">
            <a href="https://huroncg.sharepoint.com/">
              <FontAwesomeIcon icon={faEnvelope} className="fa-lg me-2 fa-fw" />
            </a>
              <div className="ml-4 text-md font-semibold w-40">
                teamC@airline.org
              </div>
            </div>
          </div>
        </div>

        {/* <form className="col-md-6 mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="visually-hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tel" className="visually-hidden">
              Number
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg mt-3">
            Submit
          </button>
        </form> */}
        <div className="col-md-5">
            <img
              src={airImage}
              alt="image"
              className="img-fluid"
            />
          </div>
      </div>
    </div>
    <Footer/>
    </Layout>
  );
}

export default Contact;
