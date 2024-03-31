import React from "react";
import './Card.css';

const Card = ({ name, imageUrl, detailsUrl, price }) => {
  return (
    <div className="container">
      <div className="tab-content" id="pills-tabContent">
        <div >
          <div className="popular-tractor-list ">
            <div >
            <figure className="product-img mb-16">
                    <a href={detailsUrl} className="lazy-container ratio ratio-2-3 bg-transparent">
                      <img className="lazyload rounded-image" src={imageUrl} alt={name} />
                    </a>
                  </figure>
                  <div className="product-details">
                    <a href={detailsUrl} title={name}>
                      <span className="product-category">{name}</span>
                    </a>
                    <div className="prod-price mb-16">From <span style={{fontSize: 12}}>₹</span> {price} Lakh* </div>
                    <a href={detailsUrl}>
                    
                      <button type="button" className="get-quote-button">View Details</button>
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


