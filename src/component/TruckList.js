// // import React, { useEffect, useState } from "react";
// // import Card from "./Card";

// // function TruckList({ trucks, updateViewAllUrl, truckData }) {
// //   const [activetrucks, setActivetrucks] = useState({}); // State to manage active trucks
// //   const [slug, setSlug] = useState(trucks[0].slug);
// //   console.log(slug);

// //   const handletruckClick = (slug) => {
// //     setActivetrucks(prevActivetrucks => {
// //       const updatedtrucks = { ...prevActivetrucks };
// //       Object.keys(updatedtrucks).forEach(truckSlug => {
// //         updatedtrucks[truckSlug] = truckSlug === slug ? true : false;
// //       });
// //       return updatedtrucks;
// //     });
// //     updateViewAllUrl(slug, trucks.find(truck => truck.slug === slug).name);
// //   };

// //   const filterTrucksBySlug = (truckData, slug) => {
// //     return truckData.filter((truck) => truck.key === slug);
// //   };
// //   const filteredTrucks = filterTrucksBySlug(truckData, slug);
// //   console.log(filteredTrucks);

// //   // const rendertrucks = (slug) => {
// //   //   if (!activetrucks[slug]) return null; // Return null if truck is not active

// //   //   console.log("truck Data:", truckData); // Debugging
// //   //   console.log(slug)

// //   //   const filteredtrucks = truckData.filter(truck => truck.key === slug);
// //   //   console.log("Filtered trucks:", filteredtrucks); // Debugging

// //   //   return filteredtrucks.map((truck, index) => (
// //   //     <div key={index}>
// //   //       <h2>{truck.name}</h2>
// //   //       <img src={truck.imageUrl} alt={truck.name} />
// //   //       <p>Price: {truck.price}</p>
// //   //       <a href={truck.detailsUrl}>Details</a>
// //   //     </div>
// //   //   ));
// //   // };
// //   useEffect(() => {
// //     filterTrucksBySlug(truckData, slug);
// //   }, [slug]);

// //   const renderTrucks = (slug) => {
// //     // if (!activetrucks[slug]) return null; // Return null if truck is not active

// //     // const filteredtrucks = filtertrucksBySlug(truckData, slug);

// //     // Check if filteredtrucks exists and is not empty
// //     if (!filteredTrucks || filteredTrucks.length === 0) {
// //       return <p>No trucks found for this truck.</p>; // Display a message if no trucks are found
// //     }

// //     return filteredTrucks.map((truck, index) => (
// //       <div className="col-12 d-flex ">
// //         <div className="truck-content aos-init aos-animate" data-aos="fade-up">
// //           <div
// //             className="popular-truck-list"
// //             style={{ display: "flex", flexDirection: "row" }}
// //             key={index}
// //           >
// //             <Card
// //               name={truck.name}
// //               imageurl={truck.imageUrl}
// //               detailsurl={truck.detailsUrl}
// //               price={truck.price}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     ));
// //   };

// //   return (
// //     <div>
// //       <ul className="nav nav-trucks" role="trucklist">
// //         {trucks.map((truck, index) => (
// //           <li
// //             key={index}
// //             className={`nav-item ${activetrucks[truck.slug] ? "active" : ""}`}
// //             role="truck"
// //           >
// //             <button
// //               className="nav-link"
// //               data-bs-toggle="truck"
// //               data-bs-target={truck.target}
// //               onClick={() => setSlug(truck.slug)}
// //               aria-selected={activetrucks[truck.slug]}
// //             >
// //               {truck.label}
// //             </button>
// //           </li>
// //         ))}

// // <div className="trucks-nav-all-vehicles">
// //   <a href="https://motorfloor.com/trucks/new" className="category-url-trac">
// //     <div className="product-view-all">
// //       <span className="category-name-trac">All New trucks</span>{" "}
// //       <img src="https://motorfloor.com/assets/img/icon-right.svg" alt=">" />
// //     </div>
// //   </a>
// // </div>

// //       </ul>

// //       <div className="truck-content">{rendertrucks(slug)}</div>
// //     </div>
// //   );
// // }

// // export default TruckList;


// import React, { useEffect, useState } from "react";
// import Card from "./Card";

// function TruckList({ trucks, updateViewAllUrl, truckData }) {
//   const [activeTabs, setActiveTabs] = useState({});
//   const [slug, setSlug] = useState(trucks[0].slug);

//   const handleTabClick = (slug) => {
//     setActiveTabs(prevActiveTabs => {
//       const updatedTabs = { ...prevActiveTabs };
//       Object.keys(updatedTabs).forEach(tabSlug => {
//         updatedTabs[tabSlug] = tabSlug === slug ? true : false;
//       });
//       return updatedTabs;
//     });
//     updateViewAllUrl(slug, trucks.find(tab => tab.slug === slug).name);
//   };

//   const filterTrucksBySlug = (truckData, slug) => {
//     return truckData.filter((truck) => truck.key === slug);
//   };

//   const filteredTrucks = filterTrucksBySlug(truckData, slug);

//   useEffect(() => {
//     filterTrucksBySlug(truckData, slug);
//   }, [slug]);

//   const renderTrucks = (slug) => {
//     if (!filteredTrucks || filteredTrucks.length === 0) {
//       return <p>No trucks found for this tab.</p>;
//     }

//     return filteredTrucks.map((truck, index) => (
//       <div className="col-12 d-flex" key={index}>
//         <div className="tab-content aos-init aos-animate" data-aos="fade-up">
//           <div className="popular-truck-list" style={{ display: "flex", flexDirection: "row" }}>
//             <Card
//               name={truck.name}
//               imageurl={truck.imageUrl}
//               detailsurl={truck.detailsUrl}
//               price={truck.price}
//             />
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <ul className="nav nav-tabs" role="tablist">
//         {trucks.map((truck, index) => (
//           <li key={index} className={`nav-item ${activeTabs[truck.slug] ? "active" : ""}`} role="tab">
//             <button
//               className="nav-link"
//               data-bs-toggle="tab"
//               data-bs-target={truck.target}
//               onClick={() => setSlug(truck.slug)}
//               aria-selected={activeTabs[truck.slug]}
//             >
//               {truck.label}
//             </button>
//           </li>
//         ))}
//       </ul>

//       <div className="tab-content">{renderTrucks(slug)}</div>
//     </div>
//   );
// }

// export default TruckList;

import React, { useEffect, useState } from "react";
import Card from "./Card";

function TruckList({ trucks, updateViewAllUrl, truckData }) {
  const [activeTabs, setActiveTabs] = useState({});
  const [slug, setSlug] = useState(trucks[0].slug);

  const handleTabClick = (slug) => {
    setActiveTabs(prevActiveTabs => {
      const updatedTabs = { ...prevActiveTabs };
      Object.keys(updatedTabs).forEach(tabSlug => {
        updatedTabs[tabSlug] = tabSlug === slug ? true : false;
      });
      return updatedTabs;
    });
    updateViewAllUrl(slug, trucks.find(tab => tab.slug === slug).name);
  };

  const filterTrucksBySlug = (truckData, slug) => {
    return truckData.filter((truck) => truck.key === slug);
  };

  const filteredTrucks = filterTrucksBySlug(truckData, slug);

  useEffect(() => {
    filterTrucksBySlug(truckData, slug);
  }, [slug]);

  const renderTrucks = (slug) => {
    if (!filteredTrucks || filteredTrucks.length === 0) {
      return <p>No trucks found for this tab.</p>;
    }

    return filteredTrucks.map((truck, index) => (
      <div className="col-12 d-flex" key={index}>
        <div className="tab-content aos-init aos-animate" data-aos="fade-up">
          <div className="popular-truck-list" style={{ display: "flex", flexDirection: "row" }}>
            <Card
              name={truck.name}
              imageurl={truck.imageUrl}
              detailsurl={truck.detailsUrl}
              price={truck.price}
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <ul className="nav nav-tabs" role="tablist">
        {trucks.map((truck, index) => (
          <li key={index} className={`nav-item ${activeTabs[truck.slug] ? "active" : ""}`} role="tab">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target={truck.target}
              onClick={() => setSlug(truck.slug)}
              aria-selected={activeTabs[truck.slug]}
            >
              {truck.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">{renderTrucks(slug)}</div>
    </div>
  );
}

export default TruckList;


