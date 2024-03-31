// import React, { useEffect, useState } from "react";
// import Card from "./Card";
// import { Row, Col } from "react-bootstrap"; // Importing Bootstrap components
// import "./Card.css";

// function AutoList({ autos, updateViewAllUrl, autoData }) {
//   const [activeAuto, setActiveAuto] = useState(autos[0].slug);
//   const [filteredAutos, setFilteredAutos] = useState([]);

//   useEffect(() => {
//     const filteredAutos = autoData.filter(
//       (auto) => auto.key === activeAuto
//     );
//     setFilteredAutos(filteredAutos);
//   }, [activeAuto, autoData]);

//   const handleAutoClick = (slug) => {
//     setActiveAuto(slug);
//     updateViewAllUrl(slug, autos.find((auto) => auto.slug === slug).name);
//   };

//   const renderAutos = () => {
//     return filteredAutos.map((auto, index) => (
//       <Col
//         xs={0}
//         sm={89}
//         md={18}
//         lg={2}
//         key={index}
//         style={{ width: "250px", margin: "4px" }}
//         className="lazyload rounded-image"
//       >
//         <Card
//           name={auto.name}
//           imageUrl={auto.imageUrl}
//           detailsUrl={auto.detailsUrl}
//           price={auto.price}
//         />
//       </Col>
//     ));
//   };

//   return (
//     <section className="auto-section">
//       <div className="container">
//         <div className="tab-content" id="pills-tabContent">
//           <div className="tab-pane fade show active" role="tabpanel">
//             <div className="popular-auto-list">
//               <h4>Best Selling Autos in India</h4>
//               <ul className="nav nav-tabs" role="tablist">
//                 {autos.map((auto, index) => (
//                   <li
//                     key={index}
//                     className={`nav-item ${
//                       activeAuto === auto.slug ? "active" : ""
//                     }`}
//                     role="tab"
//                   >
//                     <button
//                       className="nav-link"
//                       onClick={() => handleAutoClick(auto.slug)}
//                       aria-selected={activeAuto === auto.slug}
//                     >
//                       {auto.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>

//               <div className="container">
//                 <Row className="px-2">{renderAutos()}</Row>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AutoList;


import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Row, Col } from "react-bootstrap"; // Importing Bootstrap components
import "./Card.css";

function AutoList({ autos, updateViewAllUrl, autoData }) {
  const [activeAuto, setActiveAuto] = useState(autos[0].slug);
  const [filteredAutos, setFilteredAutos] = useState([]);

  useEffect(() => {
    const filteredAutos = autoData.filter(
      (auto) => auto.key === activeAuto
    );
    setFilteredAutos(filteredAutos);
  }, [activeAuto, autoData]);

  const handleAutoClick = (slug) => {
    setActiveAuto(slug);
    updateViewAllUrl(slug, autos.find((auto) => auto.slug === slug).name);
  };

  const renderAutos = () => {
    return filteredAutos.map((auto, index) => (
      <Col
        xs={0}
        sm={89}
        md={18}
        lg={2}
        key={index}
        style={{ width: "250px", margin: "4px" }}
        className="lazyload rounded-image"
      >
        <Card
          name={auto.name}
          imageUrl={auto.imageUrl}
          detailsUrl={auto.detailsUrl}
          price={auto.price}
        />
      </Col>
    ));
  };

  return (
    <section className="auto-section">
      <div className="container">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="popular-auto-list">
              <h4>Best Selling Autos in India</h4>
              <ul className="nav nav-tabs" role="tablist">
                {autos.map((auto, index) => (
                  <li
                    key={index}
                    className={`nav-item ${
                      activeAuto === auto.slug ? "active" : ""
                    }`}
                    role="tab"
                  >
                    <a
                      className="nav-link"
                      onClick={() => handleAutoClick(auto.slug)}
                      aria-selected={activeAuto === auto.slug}
                    >
                      {auto.label}
                    </a>
                  </li>
                ))}
                {/* Add your view all link here if needed */}
              </ul>

              <div className="container">
                <Row className="px-10">{renderAutos()}</Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutoList;

