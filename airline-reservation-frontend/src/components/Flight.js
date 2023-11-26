import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import './CssAll/FlightStyle.css'

const Flight = () => {
  const [flights, setFlights] = useState([]);
  const [searchParams, setSearchParams] = useState({
    source: "",
    destination: "",
    departureDate: "",
    arrivalDate: "",
  });
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [availableSources, setAvailableSources] = useState([]);
  const [availableDestinations, setAvailableDestinations] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:5275/api/flights");
        setFlights(response.data);

        const sources = Array.from(
          new Set(response.data.map((flight) => flight.source))
        );
        const destinations = Array.from(
          new Set(response.data.map((flight) => flight.destination))
        );
        setAvailableSources(sources);
        setAvailableDestinations(destinations);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  useEffect(() => {
    const filterFlights = () => {
      const { source, destination, departureDate } = searchParams;
      const filtered = flights.filter((flight) => {
        return (
          flight.source.toLowerCase().includes(source.toLowerCase()) &&
          flight.destination
            .toLowerCase()
            .includes(destination.toLowerCase()) &&
          (departureDate === "" || flight.departureDate.includes(departureDate))
        );
      });
      setFilteredFlights(filtered);
    };

    filterFlights();
  }, [flights, searchParams]);

  const handleBookFlight = (flightId, price) => {
    // window.location.href = `/booking?flightId=${flightId}&price=${price}`;
    localStorage.setItem("selectedFlightId", flightId);
    localStorage.setItem("selectedFlightPrice", price);
    window.location.href = `/booking`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (!isNaN(date)) {
      date.setDate(date.getDate() + 1);
      return date.toISOString().split("T")[0];
    } else {
      return "Invalid Date";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <div>
        <h1 style={{display : 'flex',justifyContent:'center'}}>Flight List</h1>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light ">
            <input
              type="text"
              name="source"
              className="form-control"
              value={searchParams.source}
              onChange={handleInputChange}
              placeholder="Source"
              list="sourceOptions"
              style={{ marginLeft: "40px", width: "30%" }}
            />
            <datalist id="sourceOptions">
              {availableSources.map((source) => (
                <option key={source} value={source} />
              ))}
            </datalist>
            <input
              type="text"
              name="destination"
              className="form-control"
              value={searchParams.destination}
              onChange={handleInputChange}
              placeholder="Destination"
              list="destinationOptions"
              style={{ marginRight: "20px", marginLeft: "20px", width: "30%" }}
            />
            <datalist id="destinationOptions">
              {availableDestinations.map((destination) => (
                <option key={destination} value={destination} />
              ))}
            </datalist>
            <input
              type="date"
              className="form-control"
              id="departureDate"
              name="departureDate"
              value={searchParams.departureDate}
              onChange={handleInputChange}
              placeholder="Departure Date"
              style={{ marginRight: "20px", marginLeft: "20px", width: "30%" }}
            />
          </nav>
        </div>
        <div className="cardAllData">
          {filteredFlights.map((flight) => (
            <div
              key={flight.flightId}
              // style={{
               
              // }}
              id="cardPartGo"
              >
              <div className="card cardDesign">
                <div className="card-header flight-card--header">
                  <div className="row">
                    <div className="col">
                      <div className="flight-card--header-details">
                        <div className="details-depart">
                          <strong>Departure Date:</strong>{" "}
                          {formatDate(flight.departureDate)}
                        </div>
                        <div className="details-depart">
                          <strong>Departure Time:</strong>{" "}
                          {flight.departureTime}
                        </div>
                        <div className="details-arrive">
                          <strong>Arrival Date:</strong>{" "}
                          {formatDate(flight.arrivalDate)}
                        </div>
                        <div className="details-arrive">
                          <strong>Arrival Time:</strong> {flight.arrivalTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body flight-card--details">
                  <div className="row">
                    <div className="col">
                      <div className="bc-from">
                        <span className="fs-5 fw-bold dataName">Source </span>
                        <br />
                        <span className="detail-code dataGo" style={{color:"black"}}>{flight.source}</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="bc-plane text-center">
                        <img
                          src="https://cdn.onlinewebfonts.com/svg/img_537856.svg"
                          alt="Plane"
                          className="img-fluid"
                          style={{
                            maxWidth: "66%",
                            height: "auto",
                            marginRight: "7px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="bc-to text-right">
                        <span className="fs-5 fw-bold dataName" style={{color : "black"}}>Destination </span>
                        <br />
                        <span className="detail-code dataGo" style={{color : "black"}}>
                          {flight.destination}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="priceClass">
                  <div className="row mt-4">
                    <div className="col">
                      <div className="text-left">
                        <span className="text-hline dataName" style={{color:"black"}}>Price: </span>
                        <span className="text-actual" style={{color : "black"}}> {flight.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <div className="text-left">
                        <span className="text-hline dataName" style={{color:"black"}}>Class: </span>
                        <span className="text-actual" style={{color : "black"}}> {flight.class}</span>
                      </div>
                    </div>
                  </div>

                  </div>
                 
                  <div className="row mt-4">
                    <div className="col">
                      <div className="flight-card-details--admin text-center">
                        <button
                          onClick={() =>
                            handleBookFlight(flight.flightId, flight.price)
                          }
                          className="btn btn-primary">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Flight;
