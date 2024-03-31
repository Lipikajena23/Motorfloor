import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Row, Col } from "react-bootstrap"; // Importing Bootstrap components
//import "./Card.css";

function BusList({ buses, updateViewAllUrl, busData }) {
  const [activeBus, setActiveBus] = useState(buses[0].slug);
  const [filteredBuses, setFilteredBuses] = useState([]);

  useEffect(() => {
    const filteredBuses = busData.filter(
      (bus) => bus.key === activeBus
    );
    setFilteredBuses(filteredBuses);
  }, [activeBus, busData]);

  const handleBusClick = (slug) => {
    setActiveBus(slug);
    updateViewAllUrl(slug, buses.find((bus) => bus.slug === slug).name);
  };

  const renderBuses = () => {
    return filteredBuses.map((bus, index) => (
      <Col
        xs={0}
        sm={89}
        md={18}
        lg={2}
        key={index}
        style={{ width: "250px", margin: "2px" }}
        className="lazyload rounded-image"
      >
        <Card
          name={bus.name}
          imageUrl={bus.imageUrl}
          detailsUrl={bus.detailsUrl}
          price={bus.price}
        />
      </Col>
    ));
  };

  return (
    <section className="bus-section">
        <h4>Best Selling Buses in India</h4>
      <div className="container">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" role="tabpanel">
            
            <div className="popular-bus-list">
            
              <ul className="nav nav-tabs" role="tablist">
                
                {buses.map((bus, index) => (
                  <li
                    key={index}
                    className={`nav-item ${
                      activeBus === bus.slug ? "active" : ""
                    }`}
                    role="tab"
                  >
                    <a
                      className="nav-link"
                      onClick={() => handleBusClick(bus.slug)}
                      aria-selected={activeBus === bus.slug}
                    >
                      {bus.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="container">
                <Row className="px-10">{renderBuses()}</Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusList;
