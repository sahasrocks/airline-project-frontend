import React, { useState, useEffect } from "react";
import "./CssAll/HomeStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import image1 from "./Images/airAbout.jpg";
import image2 from "./Images/airLine.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image5.jpg";
import image5 from "./Images/image5.png"
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg"
import img4 from "./Images/img4.jpg";
import img3 from "./Images/img3.jpg";
import Footer from "./Footer";


function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2,image3,image4,image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <Layout>
      <div>
        <span>
        Flight deals from India
        </span>
        <br />
        <span>
        Here are the flight deals with the lowest prices. Act fast – they all
        depart within the next three months.
        </span>
        <br />
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={index === currentSlide ? "slide active" : "slide"}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div>
        <span id="getInspire">Get Inspire</span>
        </div>
        <div class="container getPart">
          <div class="row">
            <div class="col d-flex">
              <div class="card" style={{ width: "18rem", border: '2px solid white' }}>
                <img src={img1} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Festivals From India</h5>
                  <p class="card-text">
                    Explore arts and culture festivals across India.
                  </p>
                  <div className="allVisit" id="img1Button">
                  <a href="https://www.goindigo.in/get-inspired/cultural-events.html?linkNav=Festivals%20From%20India%7C3%7CGet%20Inspired" class="btn btn-primary">
                    Visit
                  </a>
                  </div>
                </div>
              </div>
           
              <div class="card" style={{ width: "18rem", border: '2px solid white' }}>
                <img src={img2} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Sun Set Savour</h5>
                  <p class="card-text">
                     Enjoy an exclusive 6Experience at sula Vineyards when 
                     you book a flight to Nashik
                  </p>
                  <div className="allVisit" id="img2Button">
                  <a href="https://www.goindigo.in/campaigns/indigo-offers/sula-vineyards.html?linkNav=Sun%20Set%20Savour%7C2%7CGet%20Inspired" class="btn btn-primary">
                    Visit
                  </a>
                  </div>
                </div>
              </div>
              <div class="card" style={{ width: "18rem", border: '2px solid white' }}>
                <img src={img3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Eat.Stay.Love</h5>
                  <p class="card-text">
                    An all-in-one 6Experience at Fratelli Vineyards
                    awaits when you book a flight to Pune
                  </p>
                  <div className="allVisit">
                  <a href="https://www.goindigo.in/campaigns/indigo-offers/fratelli-vineyards.html" class="btn btn-primary">
                    Visit
                  </a>
                  </div>
                </div>
              </div>
              <div class="card" style={{ width: "18rem", border: '2px solid white' }}>
                <img src={img4} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Travel Wanderlust</h5>
                  <p class="card-text">
                    Travel to your next destination based on how you feel and 
                    what you like.
                  </p>
                  <div className="allVisit">
                  <a href="https://www.goindigo.in/get-inspired/travel-wanderlust.html?linkNav=Travel%20wanderlust%7C4%7CGet%20Inspired" class="btn btn-primary">
                      Visit
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  );
}

export default Home;
