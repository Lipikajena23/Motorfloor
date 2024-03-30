// import React from 'react';

// function VehicleSection({ vehicleData }) {
//   return (
//     <section className="tractor-section">
//       <div className="container">
//         <div className="tab-content" id="pills-tabContent">
//           <div className="tab-pane fade show active" id="tractor3" role="tabpanel">
//             <div className="popular-tractor-list">
//               {/* Mapping through the vehicleData array to render each tractor item */}
//               {vehicleData.map((tractor, index) => (
//                 <div className="col-md-3 col-custom" key={index}>
//                   <figure className="product-img mb-16">
//                     <a href={tractor.detailsUrl} className="lazy-container ratio ratio-2-3 bg-transparent">
//                       <img className="lazyload rounded-image" src={tractor.imageUrl} alt={tractor.name} />
//                     </a>
//                   </figure>
//                   <div className="product-details">
//                     <a href={tractor.detailsUrl} title={tractor.name}>
//                       <span className="product-category">{tractor.name}</span>
//                     </a>
//                     <div className="prod-price mb-16">From <span style={{fontSize: 12}}>₹</span> {tractor.price} Lakh* </div>
//                     <a href={tractor.detailsUrl}>
//                       <button type="button" className="get-quote-button">View Details</button>
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="tabs-nav-all-vehicles-mweb">
//           <a href="URL_TO_ALL_TRACTORS_PAGE" className="category-url-trac">
//             <div className="product-view-all">
//               <span className="category-name-trac">All New Tractors</span> <img src="https://motorfloor.com/assets/img/icon-right.svg" alt=">" />
//             </div>
//           </a>     
//         </div>
//       </div>
//     </section>
//   );
// }

// export default VehicleSection;

import React from 'react';

function VehicleSection({ vehicleData, activeTab }) {
  // Filter the vehicleData based on the activeTab
  const filteredVehicleData = vehicleData.filter(vehicle => vehicle.type === activeTab);

  return (
    <section className="tractor-section">
      <div className="container">
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="tractor3" role="tabpanel">
            <div className="popular-tractor-list">
              {/* Mapping through the filteredVehicleData array to render each tractor item */}
              {filteredVehicleData.map((tractor, index) => (
                <div className="col-md-3 col-custom" key={index}>
                  <figure className="product-img mb-16">
                    <a href={tractor.detailsUrl} className="lazy-container ratio ratio-2-3 bg-transparent">
                      <img className="lazyload rounded-image" src={tractor.imageUrl} alt={tractor.name} />
                    </a>
                  </figure>
                  <div className="product-details">
                    <a href={tractor.detailsUrl} title={tractor.name}>
                      <span className="product-category">{tractor.name}</span>
                    </a>
                    <div className="prod-price mb-16">From <span style={{fontSize: 12}}>₹</span> {tractor.price} Lakh* </div>
                    <a href={tractor.detailsUrl}>
                    
                      <button type="button" className="get-quote-button">View Details</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tabs-nav-all-vehicles-mweb">
          <a href="URL_TO_ALL_TRACTORS_PAGE" className="category-url-trac">
            <div className="product-view-all">
              <span className="category-name-trac">All New Tractors</span> <img src="https://motorfloor.com/assets/img/icon-right.svg" alt=">" />
              
            </div>
          </a>     
        </div>
      </div>
    </section>
  );
}

export default VehicleSection;
