// import React, { useEffect, useState } from "react";
// import Card from "./Card";

// function TabList({ tabs, updateViewAllUrl, tractorData }) {
//   const [activeTabs, setActiveTabs] = useState({}); // State to manage active tabs
//   const [slug, setSlug] = useState(tabs[0].slug);
//   console.log(slug);

//   const handleTabClick = (slug) => {
//     setActiveTabs(prevActiveTabs => {
//       const updatedTabs = { ...prevActiveTabs };
//       Object.keys(updatedTabs).forEach(tabSlug => {
//         updatedTabs[tabSlug] = tabSlug === slug ? true : false;
//       });
//       return updatedTabs;
//     });
//     updateViewAllUrl(slug, tabs.find(tab => tab.slug === slug).name);
//   };

//   const filterTractorsBySlug = (tractorData, slug) => {
//     return tractorData.filter((tractor) => tractor.key === slug);
//   };
//   const filteredTractors = filterTractorsBySlug(tractorData, slug);
//   console.log(filteredTractors);

//   // const renderTractors = (slug) => {
//   //   if (!activeTabs[slug]) return null; // Return null if tab is not active

//   //   console.log("Tractor Data:", tractorData); // Debugging
//   //   console.log(slug)

//   //   const filteredTractors = tractorData.filter(tractor => tractor.key === slug);
//   //   console.log("Filtered Tractors:", filteredTractors); // Debugging

//   //   return filteredTractors.map((tractor, index) => (
//   //     <div key={index}>
//   //       <h2>{tractor.name}</h2>
//   //       <img src={tractor.imageUrl} alt={tractor.name} />
//   //       <p>Price: {tractor.price}</p>
//   //       <a href={tractor.detailsUrl}>Details</a>
//   //     </div>
//   //   ));
//   // };
//   useEffect(() => {
//     filterTractorsBySlug(tractorData, slug);
//   }, [slug]);

//   const renderTractors = (slug) => {
//     // if (!activeTabs[slug]) return null; // Return null if tab is not active

//     // const filteredTractors = filterTractorsBySlug(tractorData, slug);

//     // Check if filteredTractors exists and is not empty
//     if (!filteredTractors || filteredTractors.length === 0) {
//       return <p>No tractors found for this tab.</p>; // Display a message if no tractors are found
//     }

//     return filteredTractors.map((tractor, index) => (
//       <div className="col-12 d-flex ">
//         <div className="tab-content aos-init aos-animate" data-aos="fade-up">
//           <div
//             className="popular-tractor-list"
//             style={{ display: "flex", flexDirection: "row" }}
//             key={index}
//           >
//             <Card
//               name={tractor.name}
//               imageurl={tractor.imageUrl}
//               detailsurl={tractor.detailsUrl}
//               price={tractor.price}
//             />
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <ul className="nav nav-tabs" role="tablist">
//         {tabs.map((tab, index) => (
//           <li
//             key={index}
//             className={`nav-item ${activeTabs[tab.slug] ? "active" : ""}`}
//             role="tab"
//           >
//             <button
//               className="nav-link"
//               data-bs-toggle="tab"
//               data-bs-target={tab.target}
//               onClick={() => setSlug(tab.slug)}
//               aria-selected={activeTabs[tab.slug]}
//             >
//               {tab.label}
//             </button>
//           </li>
//         ))}

// <div className="tabs-nav-all-vehicles">
//   <a href="https://motorfloor.com/tractors/new" className="category-url-trac">
//     <div className="product-view-all">
//       <span className="category-name-trac">All New Tractors</span>{" "}
//       <img src="https://motorfloor.com/assets/img/icon-right.svg" alt=">" />
//     </div>
//   </a>
// </div>

//       </ul>

//       <div className="row">{renderTractors(slug)}</div>
//     </div>
//   );
// }

// export default TabList;
import React, { useEffect, useState } from "react";
import Card from "./Card";

function TabList({ tabs, updateViewAllUrl, tractorData }) {
  const [activeTabs, setActiveTabs] = useState({}); // State to manage active tabs
  const [slug, setSlug] = useState(tabs[0].slug);
  const [filteredTractors, setFilteredTractors] = useState([]);

  const handleTabClick = (slug) => {
    setActiveTabs((prevActiveTabs) => {
      const updatedTabs = { ...prevActiveTabs };
      Object.keys(updatedTabs).forEach((tabSlug) => {
        updatedTabs[tabSlug] = tabSlug === slug ? true : false;
      });
      return updatedTabs;
    });
    updateViewAllUrl(slug, tabs.find((tab) => tab.slug === slug).name);
    setSlug(slug);
  };

  useEffect(() => {
    const filteredTractors = tractorData.filter((tractor) => tractor.key === slug);
    setFilteredTractors(filteredTractors);
  }, [slug, tractorData]);

  const renderTractors = () => {
    return filteredTractors.map((tractor, index) => (
      <div className="col-md-4" key={index}>
        <Card
          name={tractor.name}
          imageurl={tractor.imageUrl}
          detailsurl={tractor.detailsUrl}
          price={tractor.price}
        />
      </div>
    ));
  };

  return (
    <div>
      <ul className="nav nav-tabs" role="tablist">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`nav-item ${activeTabs[tab.slug] ? "active" : ""}`}
            role="tab"
          >
            <button
              className="nav-link"
              onClick={() => handleTabClick(tab.slug)}
              aria-selected={activeTabs[tab.slug]}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        <div className="row">{renderTractors()}</div>
      </div>
    </div>
  );
}

export default TabList;

