import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Row, Col } from "react-bootstrap"; // Importing Bootstrap components
import "./Card.css";

function TabList({ tabs, updateViewAllUrl, tractorData }) {
  const [activeTab, setActiveTab] = useState(tabs[0].slug);
  const [filteredTractors, setFilteredTractors] = useState([]);

  useEffect(() => {
    const filteredTractors = tractorData.filter(
      (tractor) => tractor.key === activeTab
    );
    setFilteredTractors(filteredTractors);
  }, [activeTab, tractorData]);

  const handleTabClick = (slug) => {
    setActiveTab(slug);
    updateViewAllUrl(slug, tabs.find((tab) => tab.slug === slug).name);
  };

  const renderTractors = () => {
    return filteredTractors.map((tractor, index) => (
      <Col
        xs={0}
        sm={89}
        md={18}
        lg={2}
        style={{ width: "250px", margin: "4px" }}
        key={index}
        className="lazyload rounded-image"
      >
        <Card
          name={tractor.name}
          imageUrl={tractor.imageUrl}
          detailsUrl={tractor.detailsUrl}
          price={tractor.price}
        />
      </Col>
    ));
  };

  return (
    <section className="tractor-section">
      <div className="container">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="popular-tractor-list">
              <h4>Best Selling Tractors in India</h4>
              <ul className="nav nav-tabs" role="tablist">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`nav-item ${
                      activeTab === tab.slug ? "active" : ""
                    }`}
                    role="tab"
                  >
                    <a
                      className="nav-link"
                      onClick={() => handleTabClick(tab.slug)}
                      aria-selected={activeTab === tab.slug}
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
                <a href="https://motorfloor.com/tractors/new">
                  <li
                    className="product-view-all"
                    style={{ margin: "0 50px 0 260px" }}
                  >
                    <span className="category-name-trac">All New Tractors</span>{" "}
                    <img
                      src="https://motorfloor.com/assets/img/icon-right.svg"
                      alt=">"
                    />
                  </li>
                </a>
              </ul>

              <div className="container">
                <Row className="px-10">{renderTractors()}</Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabList;
