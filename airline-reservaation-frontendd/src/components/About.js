import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import airImage from "./Images/airAbout.jpg";
import Layout from "./Layout";

function About() {
  return (
    <Layout>
      <div className="py-5">
        <div className="container mx-auto px-4 text-dark">
          <div className="row">
            <div className="col-md-5">
              <img src={airImage} alt="image" className="img-fluid" />
            </div>
            <div className="col-md-7">
              <h3 className="text-2xl text-dark font-bold">
                Welcome to our Airline App! We strive to provide you with the
                best flight reservation experience. Whether you're a frequent
                flyer or planning your first trip, we've got you covered.
              </h3>
              <p className="mt-4 text-dark">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-dark">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
