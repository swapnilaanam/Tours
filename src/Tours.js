import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, getData }) => {
  return tours.length === 0 ? (
    <>
      <h2>No Tours Left</h2>
      <button className="btn btn-info" onClick={getData}>Refresh</button>
    </>
  ) : (
    <>
      <h1>Our Tours</h1>
      <div id="divider"></div>
      <section className="my-4 w-100" id="tours">
        {tours.map((tour) => {
          return <Tour {...tour} removeTour={removeTour} />;
        })}
      </section>
    </>
  );
};

export default Tours;
