import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState();

  const getData = async () => {
    setLoading(true);
    try {
      let response = await fetch(url);
      let data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="container d-flex flex-column align-items-center"
      id="toursContainer"
    >
      {loading ? <Loading /> : <Tours tours={tours} removeTour={removeTour} getData={getData}/>}
    </div>
  );
}

export default App;
