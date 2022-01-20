import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadMore] = useState(false);
  return (
    <article className="card my-5 border-0 rounded-1 w-100">
      <img src={image} alt={name} className="img-fluid rounded-top" />
      <div className="card-body w-100 d-flex flex-column px-4">
        <div className="d-flex justify-content-between align-items-center mb-3 w-100">
          <h5>{name}</h5>
          <p className="bg-info bg-opacity-25 text-danger fw-bold px-4 py-1">{`$${price}`}</p>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button
            className="bg-transparent border-0 text-info ms-1"
            onClick={() => setReadMore(!readmore)}
          >
            {readmore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          className="bg-transparent border-1 border-danger text-danger px-5 py-1 rounded-1 
          mt-2 align-self-center justify-content-center"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
