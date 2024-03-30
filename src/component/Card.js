import React from "react";
import './Card.css';


const Card = ({ name, imageurl, detailsurl, price }) => {
  return (
    <div className="container">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="tractor3" role="tabpanel">
            <div className="popular-tractor-list">
    <div className="col-md-3 col-custom">
      <figure className="product-img mb-16">
        <a
          href={detailsurl}
          className="lazy-container ratio ratio-2-3 bg-transparent"
        >
          <img className="lazyload rounded-image" src={imageurl} />
        </a>
      </figure>
      <div className="product-details">
        <a href={detailsurl} className="product-category">
          {name}
        </a>

        <div className="prod-price mb-16">
          From <span style={{ fontSize: 12 }}>₹{price}</span> Coming Soon Lakh*{" "}
        </div>

        <a href={detailsurl} className="get-quote-button">
          View Details
        </a>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Card;

